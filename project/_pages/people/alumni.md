---
title: Alumni
layout: single
permalink: /people/alumni
sidebar:
    nav: people
classes: wide
---
<!-- Assign and Sort collection of people -->
{% assign people = site.people | sort: 'graduated_date' | reverse %}
{% assign year = 0 %}
<!-- Iterate over the collection -->
{% for person in people %}
{% assign current_year = person.graduated_date | slice: 0,4 %}
{% endfor %}
{% assign people = site.people | where: "position", "Alumni" | year != current_year | sort: 'graduated_date' | reverse %}

<table>

{% tablerow person in people cols:3 %}

        <div class="people_body">   

            <div class="people_image">
                <img src="{{site.baseurl}}{{person.header.teaser}}" alt="placeholder image 1">
            </div>
            <h3>
                <a href="{{site.baseurl}}{{person.url}}" rel="permalink">{{person.title}} {{person.name}}</a>
            </h3>
            
        </div>
{% endtablerow %}

</table>

