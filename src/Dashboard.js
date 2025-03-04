import React, { useEffect, useState } from "react";
import { db, ref, onValue } from "./firebaseConfig";
import { AppBar, Toolbar, Typography, Card, CardContent, Grid, Box } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { HeartPulse, Footprints, GaugeCircle } from "lucide-react";

const Dashboard = () => {
  const [data, setData] = useState({ heartRate: 0, steps: 0, speed: 0, distance: 0 });

  useEffect(() => {
    const dataRef = ref(db, "/sportMetrics");

    // Écoute les mises à jour de Firebase en temps réel
    onValue(dataRef, (snapshot) => {
      if (snapshot.exists()) {
        setData(snapshot.val());
      }
    });
  }, []);

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
                <Typography variant="h5" sx={{ color: "#1976d2", fontWeight: "bold" }}>
                  <HeartPulse color="#FF5733" size={28} /> Fréquence Cardiaque
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: "bold", color: "#FF5733" }}>
                  {data.heartRate} BPM
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Nombre de Pas */}
          <Grid item xs={12} md={4}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h5" sx={{ color: "#4caf50", fontWeight: "bold" }}>
                  <Footprints color="#33FF57" size={28} /> Nombre de Pas
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: "bold", color: "#33FF57" }}>
                  {data.steps} Pas
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Distance Parcourue */}
          <Grid item xs={12} md={4}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h5" sx={{ color: "#FF9800", fontWeight: "bold" }}>
                  <GaugeCircle color="#FF9800" size={28} /> Distance Parcourue
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: "bold", color: "#FF9800" }}>
                  {data.distance} m
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Graphique de vitesse */}
          <Grid item xs={12}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h5" sx={{ color: "#1976d2", fontWeight: "bold" }}>Évolution de la Vitesse</Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={[{ timestamp: "Maintenant", speed: data.speed }]}>
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
