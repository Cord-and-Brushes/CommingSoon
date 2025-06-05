import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutes: Math.floor((difference / 1000 / 60) % 60),
        Seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [targetDate]);

  return (
    <Box textAlign="center" py={2} px={2}>
      <Typography
        variant="h5"
        color="grey"
        gutterBottom
        sx={{
          fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
        }}
      >
        🚀 Launching In:
      </Typography>

      <Box
        display="flex"
        justifyContent="center"
        gap={{ xs: 1.5, sm: 2.5, md: 4 }}
        flexWrap="wrap"
      >
        {Object.entries(timeLeft).map(([unit, value]) => (
          <Box
            key={unit}
            sx={{
              backgroundColor: "#a46ede",
              color: "white",
              px: { xs: 2, sm: 3 },
              py: { xs: 1.5, sm: 2 },
              borderRadius: 2,
              minWidth: { xs: 70, sm: 80 },
              textAlign: "center",
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" } }}
            >
              {String(value).padStart(2, "0")}
            </Typography>
            <Typography
              variant="caption"
              component="div"
              sx={{
                fontSize: { xs: "0.65rem", sm: "0.75rem" },
              }}
            >
              {unit}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CountdownTimer;
