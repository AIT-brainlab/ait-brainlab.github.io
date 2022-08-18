---
title: People
layout: single
permalink: /people
sidebar:
    nav: people
classes: wide
---
<style>

</style>

## Lab Director

<!-- Assign and Sort collection of people -->
{% assign people = site.people | sort: 'idx' %}

<!-- Iterate orver the collection -->
{% for person in people %}
{% if person.position == "Lab Director" %}
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
                <b>Affiliation: </b><p>{{ person.affiliation }}</p>
                <b>Position: </b><p>{{ person.position }}</p>
            </div>
            <div>
                <h3>Contact</h3>
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
{% endif %}
{% endfor %}