import React, { useState, useEffect, useContext } from "react"
import UserInfosContext from "../contexts/UserInfos"
import AspectRatio from "@mui/joy/AspectRatio"
import Avatar from "@mui/joy/Avatar"
import Box from "@mui/joy/Box"
import Card from "@mui/joy/Card"
import IconButton from "@mui/joy/IconButton"
import Typography from "@mui/joy/Typography"
import Link from "@mui/joy/Link"
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded"
import { StyledEngineProvider, CssVarsProvider } from "@mui/joy/styles"
import PopUp from "../components/PopUp"
import axios from "axios"

export default function ContainerResponsive() {
  const { isLogged } = useContext(UserInfosContext)
  const [vehicles, setVehicles] = useState()
  const [displayPopup, setDisplayPopup] = useState()

  useEffect(() => {
    axios
      .get(`http://localhost:5001/product`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => setVehicles(response.data))
  }, [])

  if (!vehicles) return null

  return (
    <main className="flex justify-center flex-wrap w-full gap-6">
      {vehicles.map((vehicle) => {
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
                            color: "text.primary",
                            "&.Mui-focusVisible:after": {
                              outlineOffset: "-4px",
                            },
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
                            : setDisplayPopup(true)
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
        )
      })}
      {displayPopup && <PopUp />}
    </main>
  )
}
