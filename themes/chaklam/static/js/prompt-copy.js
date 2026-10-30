/* Copy the prompt text, without toolbar labels or formatting. */
(() => {
  document.querySelectorAll('.student-resource-content pre').forEach((pre, index) => {
    const source = pre.querySelector('code') || pre;
    const block = pre.closest('.highlight') || pre;
    const wrapper = document.createElement('div');
    wrapper.className = 'prompt-block';
    const toolbar = document.createElement('div');
    toolbar.className = 'prompt-toolbar';
    const label = document.createElement('span');
    label.textContent = 'Prompt';
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'prompt-copy';
    button.textContent = 'Copy';
    button.setAttribute('aria-label', `Copy prompt ${index + 1}`);
    const status = document.createElement('span');
    status.className = 'prompt-copy-status';
    status.setAttribute('role', 'status');
    toolbar.append(label, status, button);
    block.before(wrapper);
    wrapper.append(toolbar, block);

    const fallbackCopy = text => {
      const field = document.createElement('textarea');
      field.value = text;
      field.setAttribute('readonly', '');
      field.style.cssText = 'position:fixed;left:-9999px;top:0';
      document.body.append(field);
      field.select();
      let copied;
      try { copied = document.execCommand('copy'); }
      finally { field.remove(); button.focus({preventScroll: true}); }
      if (!copied) throw new Error('Clipboard unavailable');
    };

    let reset;
    button.addEventListener('click', async () => {
      const text = source.textContent;
      try {
        try { await navigator.clipboard.writeText(text); }
        catch (_) { fallbackCopy(text); }
        button.textContent = 'Copied!';
        status.textContent = 'Prompt copied.';
      } catch (_) {
        button.textContent = 'Try again';
        status.textContent = 'Could not copy. Select the prompt text to copy it manually.';
      }
      clearTimeout(reset);
      reset = setTimeout(() => {
        button.textContent = 'Copy';
        status.textContent = '';
      }, 2500);
    });
  });
})();
