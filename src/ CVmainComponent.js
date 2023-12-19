import { Box, Link, Typography } from "@mui/material";
import FeedIcon from "@mui/icons-material/Feed";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PrintComponent from "./printComponent";

const customStyles = {
  colors: {
    blue: "#6666CC",
    linkBlue: "#6666FF",
    tg: "#6699FF",
    inst: "#FF33FF",
    linkedin: "#3399FF",
    github: "#9966CC",
  },
};

export default function CVmainComponent() {


  return (
      <PrintComponent>
          <Box width={"60%"}>
            <Typography variant="h4" fontWeight={"bold"}>
              Nikolay Suhockiy
            </Typography>
            <Typography variant="h6" paddingBottom={7} lineHeight={1}>
              beginner software engineer with experience in web development and
              data analysis in the service sector
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "1vw" }}>
              <FeedIcon
                sx={{
                  fontSize: 30,
                  paddingBottom: 2,
                  color: customStyles.colors.blue,
                }}
              />
              <Typography variant="h5" fontWeight={"bold"} paddingBottom={2}>
                Work experience:
              </Typography>
            </Box>
            <Typography paddingBottom={2}>
              I have been freelancing in the American and European job markets
              for 4 months. I have done small pet projects for start-up
              companies and tasks on writing promt queries for neural networks.
              In addition, I created simple landing pages in pure html css to
              improve my knowledge of html coding.
            </Typography>
            <Box paddingBottom={2}>
              <Box sx={{ display: "flex", alignItems: "center", gap: "1vw" }}>
                <AttachFileIcon sx={{ color: customStyles.colors.linkBlue }} />
                <Link
                  href="https://github.com/budcalmy/builder-company-landingpage"
                  underline="hover"
                  fontWeight={"bold"}
                  color={customStyles.colors.linkBlue}
                  fontSize={18}
                >
                  Builder landing
                </Link>
              </Box>
              <Typography marginLeft={3.7}>HTML • CSS</Typography>
            </Box>
            <Box paddingBottom={2}>
              <Box sx={{ display: "flex", alignItems: "center", gap: "1vw" }}>
                <AttachFileIcon sx={{ color: customStyles.colors.linkBlue }} />
                <Link
                  href="https://github.com/budcalmy/IT-courses-landingpage"
                  underline="hover"
                  fontWeight={"bold"}
                  color={customStyles.colors.linkBlue}
                  fontSize={18}
                >
                  IT courses landing
                </Link>
              </Box>
              <Typography marginLeft={3.7}>HTML • CSS • JavaScript</Typography>
            </Box>
            <Box paddingBottom={2}>
              <Box sx={{ display: "flex", alignItems: "center", gap: "1vw" }}>
                <AttachFileIcon sx={{ color: customStyles.colors.linkBlue }} />
                <Link
                  href="https://github.com/budcalmy/fullstackTodoList"
                  underline="hover"
                  fontWeight={"bold"}
                  color={customStyles.colors.linkBlue}
                  fontSize={18}
                >
                  Fullstack ToDo List
                </Link>
              </Box>
              <Typography marginLeft={3.7} sx={{ lineHeight: "1.1" }}>
                HTML • JavaScript • React • Redux Toolkit • React Router •
                Node.js • MongoDB • zod • axios • express • MUI
              </Typography>
            </Box>
            <Box paddingBottom={2}>
              <Box sx={{ display: "flex", alignItems: "center", gap: "1vw" }}>
                <AttachFileIcon sx={{ color: customStyles.colors.linkBlue }} />
                <Link
                  href="https://github.com/budcalmy/lamoda-filters"
                  underline="hover"
                  fontWeight={"bold"}
                  color={customStyles.colors.linkBlue}
                  fontSize={18}
                >
                  Lamoda
                </Link>
              </Box>
              <Typography marginLeft={3.7} sx={{ lineHeight: "1.1" }}>
                HTML • JavaScript • React • body-parser • chance • sass • css
              </Typography>
            </Box>
            <Box paddingBottom={7}>
              <Box sx={{ display: "flex", alignItems: "center", gap: "1vw" }}>
                <AttachFileIcon sx={{ color: customStyles.colors.linkBlue }} />
                <Link
                  href="https://github.com/budcalmy/budcalmyNotion.github.io"
                  underline="hover"
                  fontWeight={"bold"}
                  color={customStyles.colors.linkBlue}
                  fontSize={18}
                >
                  Notion
                </Link>
              </Box>
              <Typography marginLeft={3.7} sx={{ lineHeight: "1.1" }}>
                JavaScript • React • Redux • redux-persist • redux-thunk • zod •
                chance • json-server • axios • bcryptjs • MUI
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: "1vw" }}>
              <ListAltIcon
                sx={{
                  fontSize: 30,
                  paddingBottom: 2,
                  color: customStyles.colors.blue,
                }}
              />
              <Typography variant="h5" fontWeight={"bold"} paddingBottom={2}>
                Skills:
              </Typography>
            </Box>
            <Box
              sx={{
                display: "grid",
                width: "70%",
                gridTemplateColumns: "1fr 1fr",
                gridColumnGap: "4vw",
                gridRowGap: "0.5vw",
                paddingBottom: 7,
              }}
            >
              <Box sx={{ display: "flex", gap: "1.5vw" }}>
                <Typography sx={{ fontSize: 20 }}>JavaScript</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: "1.5vw" }}>
                <Typography sx={{ fontSize: 20 }}>html, css, scss</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: "1.5vw" }}>
                <Typography sx={{ fontSize: 20 }}>React</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: "1.5vw" }}>
                <Typography sx={{ fontSize: 20 }}>Redux Toolkit</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: "1.5vw" }}>
                <Typography sx={{ fontSize: 20 }}>Python</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: "1.5vw" }}>
                <Typography sx={{ fontSize: 20 }}>Django Framework</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: "1.5vw" }}>
                <Typography sx={{ fontSize: 20 }}>MySQL</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: "1.5vw" }}>
                <Typography sx={{ fontSize: 20 }}>MongoDB</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: "1.5vw" }}>
                <Typography sx={{ fontSize: 20 }}>cpython</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: "1.5vw" }}>
                <Typography sx={{ fontSize: 20 }}>C++</Typography>
              </Box>
            </Box>
            <Box sx={{ width: "60vw" }}>
              <Typography fontWeight={"bold"}>Good afternoon!</Typography>
              <Typography>
                {" "}
                I started learning Python and studied it for 2 years. During
                this time, he was engaged in the development of small standard
                algorithms and wrote several parsers. Then I studied C++ for 2
                years, mainly studied flexible memory work, wrote small
                algorithms and solved problems from LeetCode.
              </Typography>
              <Typography maxWidth={"60vw"} maxHeight={"20vw"}>
                I continued studying C++ at the university. Then I switched to
                JavaScript + React and have been doing web development for the
                last year.
              </Typography>
              <Typography>
                I try to improve my hard and soft skills. For example, I
                regularly write new pet projects by assembling a team or on my
                own. In the future, I'm going to study new technologies such as
                Golang, PostgreSQL, Firebase
              </Typography>
            </Box>
          </Box>
          <Box width={"40%"}>
            <Box maxWidth={"40%"}>
              <Box sx={{ display: "flex", alignItems: "center", gap: "0.5vw" }}>
                <LocationOnIcon />
                <Typography fontWeight={"bold"}>Minsk, Belarus</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5vw",
                  paddingBottom: 6,
                }}
              >
                <EmailIcon />
                <Link
                  href="https://github.com/budcalmy/builder-company-landingpage?tab=readme-ov-file"
                  underline="hover"
                  fontWeight={"bold"}
                  sx={{ maxWidth: "3vw" }}
                >
                  gmail
                </Link>
              </Box>
            </Box>
            <Box sx={{ paddingBottom: 6 }}>
              <Typography variant="h5" fontWeight={"bold"} paddingBottom={2}>
                Education:
              </Typography>
              <Typography fontWeight={"bold"}>Mobile - developer</Typography>
              <Typography sx={{ lineHeight: "20px" }}>
                Belarusian State University, faculty of Mechanics and
                Mathematics • 2022 - 2026
              </Typography>
            </Box>
            <Box sx={{ paddingBottom: 6 }}>
              <Typography variant="h5" fontWeight={"bold"} paddingBottom={2}>
                Languages:
              </Typography>
              <Typography>English B1</Typography>
              <Typography>Russian</Typography>
            </Box>
            <Box
              sx={{
                paddingBottom: 6,
                display: "flex",
                flexDirection: "column",
                gap: "1vw",
              }}
            >
              <Typography variant="h5" fontWeight={"bold"} paddingBottom={2}>
                Social Networks:
              </Typography>
              <Box sx={{ display: "flex", gap: "0.6vw", alignItems: "center" }}>
                <TelegramIcon sx={{ color: customStyles.colors.tg }} />
                <Link underline="hover" fontWeight={"bold"} color={"black"}>
                  telegram
                </Link>
              </Box>
              <Box sx={{ display: "flex", gap: "0.6vw", alignItems: "center" }}>
                <GitHubIcon sx={{ color: customStyles.colors.github }} />
                <Link underline="hover" fontWeight={"bold"} color={"black"}>
                  github
                </Link>
              </Box>
              <Box sx={{ display: "flex", gap: "0.6vw", alignItems: "center" }}>
                <LinkedInIcon sx={{ color: customStyles.colors.linkedin }} />
                <Link underline="hover" fontWeight={"bold"} color={"black"}>
                  linkedIn
                </Link>
              </Box>
            </Box>
          </Box>
      </PrintComponent>
  );
}
