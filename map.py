import pandas as pd
import folium

df = pd.read_csv("dest.csv")
df.head()

loc_center = [df['lat'].mean(), df['lng'].mean()]

map1 = folium.Map(location = loc_center, tiles='Openstreetmap', zoom_start = 5, control_scale=True)
for index, loc in df.iterrows():
    folium.CircleMarker([loc['lat'], loc['lng']],     radius=2, weight=5, popup=loc['location']).add_to(map1)
folium.LayerControl().add_to(map1)
map1