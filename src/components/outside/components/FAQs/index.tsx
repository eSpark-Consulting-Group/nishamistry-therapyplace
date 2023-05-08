import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
// import AddSharpIcon from "@mui/icons-material/AddSharp";
// import RemoveSharpIcon from "@mui/icons-material/RemoveSharp";
import { faqs } from "./constants";

const FAQs: React.FC = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        mb: 7,
      }}
    >
      <Box
        sx={{
          py: 5,
          width: "100%",
          backgroundColor: "#CBDBD8",
        }}
      >
        <Container maxWidth="lg" component="div">
          <Typography
            variant="h2"
            color="primary"
            fontWeight={600}
            sx={{
              fontSize: {
                xs: "30px",
                md: "35px",
                lg: "40px",
              },
            }}
            className="font-LGCB"
          >
            FAQs
          </Typography>

          <Typography
            variant="h6"
            fontWeight={400}
            color="primary"
            sx={{
              textTransform: "uppercase",
              letterSpacing: 1,
              fontSize: {
                xs: "16px",
                md: "18px",
                lg: "20px",
              },
            }}
            className="font-LGC"
          >
            Frequently Asked Questions to you 
          </Typography>
        </Container>
      </Box>

      <Container
        maxWidth="lg"
        component="div"
        sx={{
          my: 6,
        }}
      >
        <Box
          sx={{
            p: 6,
            backgroundColor: "#CD7F59",
          }}
        >
          {faqs.map((faq, index) => (
            <Accordion
              key={faq.id}
              expanded={expanded === faq.id}
              onChange={handleChange(faq.id)}
              sx={{
                backgroundColor: "inherit",
                boxShadow: "none",
                borderBottom: {
                  xs: "3px solid #22244B",
                  lg: "5px solid #22244B",
                },
                ...(index === 0 && {
                  borderTop: {
                    xs: "3px solid #22244B",
                    lg: "5px solid #22244B",
                  },
                }),
                "&.MuiAccordion-root:before": {
                  content: "none",
                },
              }}
            >
              <AccordionSummary
                sx={{
                  px: 0,
                }}
                expandIcon={
                  expanded === faq.id ? (
                    // <RemoveSharpIcon color="primary" /> 
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>               

                  ) : (
                    // <AddSharpIcon color="primary" />
                    <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                  )
                }
                aria-controls={`${faq.id}-content`}
                id={`${faq.id}-header`}
              >
                <Typography
                  variant="h6"
                  color="primary"
                  fontWeight={600}
                  sx={{
                    fontSize: {
                      xs: "14px",
                      lg: "19px",
                    },
                  }}
                className="font-LGCB"
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  px: 0,
                }}
              >
                <Typography
                  color="white"
                  variant="h6"
                  component="p"
                  sx={{
                    fontSize: {
                      xs: "15px",
                      lg: "21px",
                    },
                    whiteSpace: "break-spaces",
                  }}
                className="font-LGC"
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>

      <Box
        sx={{
          p: 3,
          px: { xs: 6, md: 10, lg: 10 },
          mx: { xs: 2 },
          mr: { xs: 3 },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "#CBDBD8",
          borderRadius: "200px",
          maxWidth: "600px",
          boxShadow: `10px 12px 0px 0px rgba(167, 191, 189, 1)`,
        }}
      >
        <Typography
          color="White"
          sx={{
            textTransform: "uppercase",
            fontSize: {
              xs: 14,
              md: 20,
              lg: 28,
            }
          }}
          fontWeight={500}
          className="font-LGCB"
          >
          GET FULL ACCESS TO:
        </Typography>
        <Typography
          color="primary"
          fontWeight={600}
          sx={{
            fontSize: {
              xs: 18,
              md: 24,
              lg: 32,
            },
            textAlign: "center",
            textTransform: "uppercase",
          }}
          className="font-LGCB"
          >
          {"\‘HELP YOUR TODDLER TALK\’"}
        </Typography>

        <Typography
          sx={{
            color: "#CD7F59",
            fontSize: {
              xs: 18,
              md: 24,
              lg: 32,
            }
          }}
          fontWeight={600}
          className="font-LGCB"
          >
          £49.99
        </Typography>

        <Button
          variant="contained"
          size="medium"
          color="primary"
          sx={{
            px: 10,
            py: 1,
            mt: 1,
            fontWeight: 400,
            textTransform: "uppercase",
            fontSize: {
              lg: 18
            }
          }}
          style={{ backgroundColor: "#23254E" }}
          className="font-LGC"
          >
          Buy it Now
        </Button>
      </Box>
    </Box>
  );
};

export default FAQs;
