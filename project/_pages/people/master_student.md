---
title: Master Student
layout: single
permalink: /people/master_student
sidebar:
    nav: people
classes: wide
---
<style>

</style>

<!-- Assign and Sort collection of people -->
{% assign people = site.people | where: "position", "Master Student" | sort: 'idx' %}

<table>

{% tablerow person in people cols:3 %}

        <div class="people_body">   

            <div class="people_image">
                <img src="{{ site.baseurl }}{{ person.header.teaser }}" alt="placeholder image 1">
            </div>
            <h3>
                <a href="{{ site.baseurl }}{{ person.url }}" rel="permalink">{{ person.title }} {{ person.name }}</a>
            </h3>
            
        </div>
{% endtablerow %}

</table>

