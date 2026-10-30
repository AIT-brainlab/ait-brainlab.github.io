/* Copy the prompt text, without toolbar labels or formatting. */
(() => {
  document.querySelectorAll('.student-resource-content pre').forEach((pre, index) => {
    const source = pre.querySelector('code') || pre;
    // Emphasise key instructions without adding Markdown to copied text.
    const priorities = [
      'Inspect any existing project first', 'private GitHub repository',
      'Create only the folders we need', 'current official paper template',
      'Create notes/research-note.md', 'Label unknowns and findings pending',
      'Update the paper, GitHub record, and notes/research-note.md',
      'Separate evidence from assumptions',
      'Report what you actually saved', 'short handoff',
      'Leave the judgment of significance and the final choice to me',
      'verified peer-reviewed work', 'Read the closest papers beyond their abstracts',
      'critically review them against verified evidence', 'three candidate ideas',
      'first principles', 'Challenge assumptions', 'systems thinking',
      'three related research questions', 'three corresponding objectives',
      'three anticipated contributions', 'Label contributions as intended',
      'strongest counterexample', 'novelty and significance',
      'Present evidence for my judgment', 'agreed time budget',
      'Do not say “definitely novel”', 'clear hypotheses and competing explanations',
      'credible simple and strong relevant baselines', 'construct validity',
      'internal validity', 'Separate essential from optional work',
      'write the introduction, related work, and planned methodology',
      'planned, completed, and exploratory work distinct',
      'Never fill results with invented numbers', 'Record what really ran',
      'methodology figure', 'update the paper, evidence table, and shared note',
      'five connected sentences', 'findings pending',
      'Revise weak reasoning before polishing the English', 'Figure 1',
      'three most consequential concerns', 'return to Idea Testing',
      'Never promise publication acceptance'
    ];
    const escapePattern = text => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\s+/g, '\\s+');
    const emphasis = new RegExp(priorities.map(escapePattern).join('|'), 'gi');
    const text = source.textContent;
    const formatted = document.createDocumentFragment();
    let cursor = 0;
    for (const match of text.matchAll(emphasis)) {
      formatted.append(document.createTextNode(text.slice(cursor, match.index)));
      const strong = document.createElement('strong');
      strong.textContent = match[0];
      formatted.append(strong);
      cursor = match.index + match[0].length;
    }
    formatted.append(document.createTextNode(text.slice(cursor)));
    source.replaceChildren(formatted);
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
