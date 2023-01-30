import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Awards() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://res.cloudinary.com/my-account-145/image/upload/v1674248613/CNS_Ffoto_ab1ddd734d.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Certificación Nacional ante la Comisión de Seguros y Finanzas
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://res.cloudinary.com/my-account-145/image/upload/v1674084109/axa_logo_solid_rgb_1_bb8db7acd6.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Prevención del Lavado de Dinero
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://res.cloudinary.com/my-account-145/image/upload/v1674084109/axa_logo_solid_rgb_1_bb8db7acd6.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Seguridad de la Información
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://res.cloudinary.com/my-account-145/image/upload/v1674084109/axa_logo_solid_rgb_1_bb8db7acd6.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Seguridad de Datos para la Industria de Tarjeta de Pago
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
