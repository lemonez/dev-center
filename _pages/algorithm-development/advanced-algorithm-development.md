---
layout: article
title:  "Deep Dives"
excerpt: "Best Practices and Deep Dives for Algorithm Development and Model Deployment"
categories: algorithm-development
tags: [algo-dev]
show_related: false
author: steph_kim
image:
  teaser: /icons/algo.svg
menus:
  algo_development:
    url: /developers/algorithm-development/advanced-algorithm-development
    title: "Deep Dives"
    weight: 2
---

<ul class="syn-card-list">
  {% assign post_title = "Local Development: emulating the Algorithmia execution environment" %}
  <li>
    <div class="syn-card full-height no-padding actionable">
      <a href="{{site.baseurl}}/algorithm-development/advanced-algorithm-development/local-development" class="syn-link-no-decoration" title="{{ post_title }}">
        <img src="{{site.cdnurl}}{{site.baseurl}}/images/post_images/local_development/local_development.png" alt="icon" class="syn-card-banner-image syn-mb-24 syn-image-contained">
        <h5 class="syn-mb-8 syn-mh-16">{{ post_title }}</h5>
      </a>
    </div>
  </li>

  {% assign post_title = "Inspecting Algorithms: determining the live list of packages / dependencies" %}
  <li>
    <div class="syn-card full-height no-padding actionable">
      <a href="{{site.baseurl}}/algorithm-development/advanced-algorithm-development/list-packages" class="syn-link-no-decoration" title="{{ post_title }}">
        <img src="{{site.cdnurl}}{{site.baseurl}}/images/post_images/list_packages/dependencies.png" alt="icon" class="syn-card-banner-image syn-mb-24 syn-image-contained">
        <h5 class="syn-mb-8 syn-mh-16">{{ post_title }}</h5>
      </a>
    </div>
  </li>

  {% assign post_title = "Multithreading: call many Algorithms in parallel" %}
  <li>
    <div class="syn-card full-height no-padding actionable">
      <a href="{{site.baseurl}}/algorithm-development/advanced-algorithm-development/multithreading" class="syn-link-no-decoration" title="{{ post_title }}">
        <img src="{{site.cdnurl}}{{site.baseurl}}/images/post_images/multithreading/multithreading.png" alt="icon" class="syn-card-banner-image syn-mb-24 syn-image-contained">
        <h5 class="syn-mb-8 syn-mh-16">{{ post_title }}</h5>
      </a>
    </div>
  </li>

  {% assign post_title = "Batch Processing: efficiently run predictions on large data volumes" %}
  <li>
    <div class="syn-card full-height no-padding actionable">
      <a href="{{site.baseurl}}/algorithm-development/advanced-algorithm-development/batch-processing" class="syn-link-no-decoration" title="{{ post_title }}">
        <img src="{{site.cdnurl}}{{site.baseurl}}/images/post_images/batch-processing/batch_processing.png" alt="icon" class="syn-card-banner-image syn-mb-24 syn-image-contained">
        <h5 class="syn-mb-8 syn-mh-16">{{ post_title }}</h5>
      </a>
    </div>
  </li>

  {% socialcard https://blog.algorithmia.com/advanced-grammar-and-natural-language-processing-with-syntaxnet/ %}
  {% socialcard https://blog.algorithmia.com/deep-dive-into-object-detection-with-open-images-using-tensorflow/ %}
  {% socialcard https://blog.algorithmia.com/deep-dive-into-parallelized-video-processing/ %}
</ul>
