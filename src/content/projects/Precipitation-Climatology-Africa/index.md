---
title: "Investigating the Precipitation Climatology over Lake Victoria"
description: "My learnings from the GPM Mentorship 2024 program lecture series and capstone project
date: 2024-04-19
demoURL: ""
repoURL: "https://github.com/faithhunja/SQL-Server-Audit-and-Monitoring-in-Power-BI"
draft: True
---

## Introduction

In this project, we will examine the precipitation climatology over Lake Victoria.

- Basic info about Lake Victoria

Precipitation refers to any liquid or frozen water that forms in the atmosphere and falls to the earth [[1](https://education.nationalgeographic.org/resource/precipitation/)]. Climatology is the study of climate and how it changes over time. This science helps people better understand the atmospheric conditions that cause weather patterns over time [[2](https://education.nationalgeographic.org/resource/climatology/)].

The Integrated Multi-satellitE Retrievals for the Global Precipitation Measurement (IMERG) is NASA's updated precipitation algorithm which takes advantage of the available satellite constellation capable of observing precipitation. IMERG uses the Global Precipitation Measurement (GPM) mission and Tropical Rainfall Measuring Mission (TRMM) satellites as the calibration reference, to produce a high-resolution gridded precipitation product [[3](https://climatedataguide.ucar.edu/climate-data/gpm-global-precipitation-measurement-mission)].

GPM is an international satellite mission launched by NASA and JAXA on 27th February, 2014, as a follow on to the TRMM satellite mission. NASA have applied the IMERG algorithm to both TRMM-era and GPM-era data, creating a satellite-based global precipitation record with high spatial (0.1 degree) and temporal (30 minute) resolution, spanning from 2000 ro the present day. This is done by gridding the passive microwave (PMW) precipitation estimates—which are more direct and hence high-quality retrievals—and calibrating them to the combined radar-radiometer product from the GPM and TRMM satellites. IMERG is used to produce a number of precipitation data products, with runs for different latency requirements [[3](https://climatedataguide.ucar.edu/climate-data/gpm-global-precipitation-measurement-mission)]:

- Early run: Has 4-hour latency, and is updated every hour.
- Late run: Has 12-hour latency, and is updated every hour.
- Final run: Has 3-month latency, and is updated every month.

For this project, we use the grand (for the full time period available) and monthly precipitation estimates, and for the final run, which is the research grade product with the full algorithm. The IMERG algorithm also natively produces half-hour estimates (and monthly estimates for the Final Run), but other derived products, such as daily precipitation estimates aggregated from the half-hour, are produced by data providers as a convenience to users [[3](https://climatedataguide.ucar.edu/climate-data/gpm-global-precipitation-measurement-mission)]. We converted the precipitation estimates from IMERG into grand and monthly estimates for our use in this project. Also, we will use the latest version of IMERG which is V07. The best source of IMERG data can be found on the GPM website [here](https://gpm.nasa.gov/data/directory).

- Suspicion that IMERG exaggerates precipitation for inland water bodies
- Verifying using Lake Victoria
- Figure out if issue is the data itself, or the microwave input

## Learnings from lecture series

## Methods

We will first find the global grand climatology and the global monthly climatology. Then we will find the climatology within Lake Victoria.

The IMERG file format is HDF5, upon with the netCDF4 file format is built. We converted the IMERG HDF5 precipitation estimates into netCDF4 grand and monthly precipitation estimates for use in this project.

### Global grand climatology

We first compute the grand climatology to support our hypothesis. The grand precipitation estimates ranges from June 2000 to May 2023.
We start by installing and importing the required python packages. Matplotlib and cartopy are needed for plotting.

<!-- {::nomarkdown}
{% assign jupyter_path = 'assets/jupyter/Lake_Victoria_precipitation_climatology.ipynb' | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/Lake_Victoria_precipitation_climatology.ipynb %}{% endcapture %}
{% if notebook_exists == 'true' %}
  {% jupyter_notebook jupyter_path %}
{% else %}
  <p>Sorry, the notebook you are looking for does not exist.</p>
{% endif %}
{:/nomarkdown} -->

### Global monthly climatology

Next, we compute the monthly climatology. The monthly precipitation estimates range from 2001 until 2022. We repeat some of the steps described above.

- For loop to plot the graphs?
- Put code in functions?

### Observations

From the monthly climatologies, we see that ...

### Lake Victoria climatology

Next, we examine the climatology for Lake Victoria.
Its coordinates are ...

## Conclusion

### References


[1] <https://education.nationalgeographic.org/resource/precipitation/>

[2] <https://education.nationalgeographic.org/resource/climatology/>

[3] Huffman, George J. &, Tan, Jackson & National Center for Atmospheric Research Staff (Eds). Last modified 2023-07-28 "The Climate Data Guide: IMERG precipitation algorithm and the Global Precipitation Measurement (GPM) Mission.” Retrieved from <https://climatedataguide.ucar.edu/climate-data/gpm-global-precipitation-measurement-mission>
