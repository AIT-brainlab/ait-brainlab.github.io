---
title: Alumni
layout: single
permalink: /people/alumni
sidebar:
    nav: people
classes: wide
---
<!-- Assign and Sort collection of people -->
{% assign people = site.people | sort: 'idx' %}

<!-- Iterate orver the collection -->
{% for person in people %}
{% if person.position == "Alumni" %}
<div class="row">
    <div class="col-2">
        <div class="people_image">
            <img src="{{ site.baseurl }}{{ person.header.teaser }}" alt="placeholder image 1">
        </div>
    </div>
    <div class="col-10">
        <div class="people_body">
            <h3><a href="{{ site.baseurl }}{{ person.url }}" rel="permalink">{{ person.title }} {{ person.name }}</a></h3>
            <div class="">
                <b>Current Workplace:</b><p>{{ person.work_place }}</p>
                <b>Position:</b><p>{{ person.work_job }}</p>
            </div>
            <div>
                <b>Contact:</b>
                <ul>
            {% for contact in person.contacts %}
                <li>
                    <a href='{{ contact.url }}' target='_blank' style='color: inherit; text-decoration: none;'>
                        <i class='{{ contact.icon }}' aria-hidden='true'></i>
                        {{ contact.title }}
                    </a>
                </li>
            {% endfor %}
                </ul>
            </div>
        </div>
    </div>
</div>
<hr>
{% endif %}
{% endfor %}