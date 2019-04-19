# API V1

<note type="warning">API V1 is depreciated.</note>

The REST API gives developers the ability to use Muwaqqit ṣalāh times and astronomical data in their own applications.

Data can be requested in JSON or XML using the appropriate endpoint: https://api.muwaqqit.com/api.json or https://api.muwaqqit.com/api.xml.

The following query string parametres can be used: d date as yyyy-mm-dd, eg. "d=2016-09-06"; diptype set "diptype=apparent" to use horizon dip for fajr/esha/ishtibak; ea esha angle in degrees, eg. "ea=-18.0"; eh elevation of the horizon in metres, eg. "eh=5.0"; eo elevation of the observer in metres, eg. "eo=5.0"; fa fajr angle in degrees, eg. "fa=-18.0"; fea fajr/esha uncertainty in degrees, eg. "fea=0.5"; ia karakah angle in degrees, eg. "ia=4.5"; isn istibak un-nujum angle in degrees, eg. "isn=-10.0"; isna istibak un-nujum uncertainty angle in degrees, eg. "isna=0.5"; k refraction coefficient, eg. "k=0.155"; ln longitude as a decimal, eg. "ln=0.0458383"; lt latitude as a decimal, eg. "lt=0.0458383"; p pressure at the observer in mb, eg "p=1010.0"; t temperature at the observer in celsius, eg "t=15.0"; rsa sun rise/set uncertainty in degrees, eg. "rsa=0.5"; tz time zone name according to the tz database where any special characters are escaped, eg. "tz=Europe%2FLondon"; vc hilal sighting model – set "vc=5.65" for naked-eye clear, "vc=3.53" for naked-eye difficult, "vc=2.00" for naked-eye very difficult, "vc=-0.96" for optical aid.

The API returns data for one month at a time. Non-registered requests are rate limited.

Data is licensed under a Creative Commons Attribution License. This allows derivative use on the condition of appropriate attribution and linking back to Muwaqqit.