import React from "react";
import { AppBar, Toolbar, Typography, Card, CardContent, Grid, Box } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { HeartPulse, Footprints, MapPin, GaugeCircle } from "lucide-react";

const staticData = [
  { timestamp: "10:00", speed: 12 },
  { timestamp: "10:05", speed: 14 },
  { timestamp: "10:10", speed: 11 }
];

const Dashboard = () => {
  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, color: "white", fontWeight: "bold" }}>
            Tableau de Bord IoT
          </Typography>
        </Toolbar>
      </AppBar>

      <Box sx={{ padding: 3 }}>
        <Grid container spacing={3}>

          {/* Fréquence Cardiaque */}
          <Grid item xs={12} md={4}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h5" sx={{ display: "flex", alignItems: "center", gap: 1, color: "#1976d2", fontWeight: "bold" }}>
                  <HeartPulse color="#FF5733" size={28} /> Fréquence Cardiaque
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: "bold", color: "#FF5733" }}>75 BPM</Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Nombre de Pas */}
          <Grid item xs={12} md={4}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h5" sx={{ display: "flex", alignItems: "center", gap: 1, color: "#4caf50", fontWeight: "bold" }}>
                  <Footprints color="#33FF57" size={28} /> Nombre de Pas
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: "bold", color: "#33FF57" }}>1025 Pas</Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Distance parcourue */}
          <Grid item xs={12} md={4}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h5" sx={{ display: "flex", alignItems: "center", gap: 1, color: "#ff9800", fontWeight: "bold" }}>
                  <GaugeCircle color="#ff9800" size={28} /> Distance Parcourue
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: "bold", color: "#ff9800" }}>1.2 km</Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Graphique */}
          <Grid item xs={12}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h5" sx={{ color: "#1976d2", fontWeight: "bold" }}>Évolution des Données</Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={staticData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="timestamp" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="speed" stroke="#ff9800" name="Vitesse" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>

        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
