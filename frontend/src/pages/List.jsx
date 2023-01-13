import React, { useState, useEffect, useContext } from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import Link from "@mui/joy/Link";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { StyledEngineProvider, CssVarsProvider } from "@mui/joy/styles";
import PopUp from "../components/PopUp";
import axios from "axios";
import ResearchInfosContext from "../contexts/ResearchInfos";
import UserInfosContext from "../contexts/UserInfos";

export default function ContainerResponsive() {
  const [vehicles, setVehicles] = useState();
  const [user, setUser] = useState();
  const [displayPopup, setDisplayPopup] = useState();
  const { whereInput, setWhereInput, setDateFormated, dateFormated } =
    useContext(ResearchInfosContext);
  const { isLogged } = useContext(UserInfosContext);

  useEffect(() => {
    axios
      .get(`http://localhost:5001/product`, {
        /*  headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }, */
      })
      .then((response) => setVehicles(response.data));
  }, []);

  /* if (!vehicles) return null; */

  function dateToString(obj) {
    const dateString = Object.values(obj).join("");
    return dateString;
  }

  /* console.log(dateToString(vehicles[0].rentings[0]));
   */
  return (
    <main className="flex justify-center flex-wrap w-full gap-6">
      <div>
        <h3 className="p-10 flex justify-center">
          Available vehicle(s) in {whereInput} for the {dateFormated}:
        </h3>
      </div>
      {vehicles
        ?.filter(
          (vehicle) => vehicle.localisation === whereInput /* &&
              dateToString(vehicle.rentings[0]) === dateFormated */
        )
        .map((vehicle) => {
          return (
            <CssVarsProvider>
              <StyledEngineProvider injectFirst>
                <Box sx={{ minHeight: 350 }}>
                  <Card
                    variant="outlined"
                    className="card"
                    sx={(theme) => ({
                      width: 300,
                      gridColumn: "span 2",
                      flexDirection: "row",
                      flexWrap: "wrap",
                      resize: "horizontal",
                      overflow: "hidden",
                      gap: "clamp(0px, (100% - 360px + 32px) * 999, 16px)",
                      transition: "transform 0.3s, border 0.3s",
                      "&:hover": {
                        borderColor:
                          theme.vars.palette.primary.outlinedHoverBorder,
                        transform: "translateY(-2px)",
                      },
                      "& > *": {
                        minWidth: "clamp(0px, (360px - 100%) * 999,100%)",
                      },
                    })}
                  >
                    <AspectRatio
                      variant="soft"
                      className="text-center text-2xl"
                      sx={{
                        flexGrow: 1,
                        display: "contents",
                        "--AspectRatio-paddingBottom":
                          "clamp(0px, (100% - 360px) * 999, min(calc(100% / (16 / 9)), 300px))",
                      }}
                    >
                      {vehicle.description}
                    </AspectRatio>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        maxWidth: 200,
                      }}
                    >
                      <Box sx={{ display: "flex" }}>
                        <div>
                          <p
                            className="card__title"
                            underline="none"
                            sx={{
                              "--AspectRatio-paddingBottom":
                                "clamp(0px, (100% - 200px) * 999, 200px)",
                              pointerEvents: "none",
                            }}
                          >
                            {vehicle.name}
                          </p>
                          <Typography level="body2">
                            {vehicle.localisation}
                          </Typography>
                        </div>
                        <IconButton
                          size="sm"
                          variant="plain"
                          color="neutral"
                          sx={{ ml: "auto", alignSelf: "flex-start" }}
                        >
                          <FavoriteBorderRoundedIcon color="danger" />
                        </IconButton>
                      </Box>
                      <AspectRatio
                        variant="soft"
                        sx={{
                          "--AspectRatio-paddingBottom":
                            "clamp(0px, (100% - 200px) * 999, 200px)",
                          pointerEvents: "none",
                        }}
                      >
                        <img alt="" src={vehicle.photo} />
                      </AspectRatio>
                      <Box sx={{ display: "flex", gap: 1.5, mt: "auto" }}>
                        <Avatar variant="soft" color="neutral">
                          <img
                            src="https://api.lorem.space/image/face?w=120&h=120&hash=bart89fe"
                            alt=""
                          />
                        </Avatar>
                        <div className="w-full">
                          <Typography level="body2">Posted by</Typography>
                          <Typography fontWeight="lg" level="body2">
                            {vehicle.owner}
                          </Typography>
                        </div>
                        <button
                          className="contactButton"
                          onClick={() => {
                            isLogged
                              ? setDisplayPopup(false)
                              : setDisplayPopup(true);
                          }}
                        >
                          Contact
                        </button>
                      </Box>
                    </Box>
                  </Card>
                </Box>
              </StyledEngineProvider>
            </CssVarsProvider>
          );
        })}
      {displayPopup && <PopUp />}
    </main>
  );
}
