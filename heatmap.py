#import libraries
from matplotlib import pyplot as plt
import numpy as np
import pandas as pd
import geopandas as gpd
np.random.seed(42)
import carto2gpd
import folium
from folium.plugins import HeatMap, HeatMapWithTime
#import carto2gpd
from folium.elements import JSCSSMixin
from folium.map import Layer
from folium.utilities import none_max, none_min
import dash
from jobs import app
import dash_core_components as dcc
import dash_html_components as html
from dash.dependencies import Input, Output
import plotly.graph_objs as go
import dash_table_experiments as dt


#read in data
ddata = gpd.read_file("heatmap.py")

#Remove missing geometires
ddata = ddata.loc[ddata.geometry.notnull()].copy()

# Extract the lat and longitude from the geometery column
ddata['lat'] = ddata.geometry.y
ddata['lng'] = ddata.geometry.x



# Make a NumPy array (use the "values" attribute)
ddata_coords = ddata[['lat', 'lng']].values


# Initialize Map
m1 = folium.Map(
    location=[32.06, -112.08],
    tiles='Cartodb Positron',
    zoom_start=12
)

# Add heat map coordinates
HeatMap(ddata_coords).add_to(m1)


time_index = list(ddata['Year'].sort_values().astype('str').unique())

input_data = []
for year in time_index:
      sel = ddata['Year'] == int(year)
      ddata_subset = ddata.loc[sel]
      coords = ddata_subset[['lat', 'lng']].values
      input_data.append([coord[0], coord[1]])


#Draw heatmap with time slider
hmt = folium.Map(location=[36.0902, -95.7129],
               tiles='cartodbpositron',
               zoom_start=6,
               control_scale=True)

hm = pulgins.HeatMap(data=input_data,
                index=time_index,
                radius=10,
                auto_play=True,
                max_opacity=0.3).add_to(hmt)

hmt