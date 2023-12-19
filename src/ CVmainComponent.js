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
import { styled } from "@mui/system";

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

const ResponsiveTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    fontSize: '16px',
  },
  [theme.breakpoints.between('md', 'lg')]: {
    fontSize: '18px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '20px',
  },
}));

export default function CVmainComponent() {


  return (
    <PrintComponent>
      <Box width={"60%"}>
        <ResponsiveTypography variant="h4" fontWeight={"bold"}>
          Nikolay Suhockiy
        </ResponsiveTypography>
        <ResponsiveTypography variant="h6" paddingBottom={7}>
          beginner software engineer with experience in web development and data
          analysis in the service sector
        </ResponsiveTypography>
        <Box sx={{ display: "flex", alignItems: "center", gap: "1vw" }}>
          <FeedIcon
            sx={{
              fontSize: 30,
              paddingBottom: 2,
              color: customStyles.colors.blue,
            }}
          />
          <ResponsiveTypography variant="h5" fontWeight={"bold"} paddingBottom={2}>
            Work experience:
          </ResponsiveTypography>
        </Box>
        <ResponsiveTypography paddingBottom={2}>
          I have been freelancing in the American and European job markets for 4
          months. I have done small pet projects for start-up companies and
          tasks on writing promt queries for neural networks. In addition, I
          created simple landing pages in pure html css to improve my knowledge
          of html coding.
        </ResponsiveTypography>
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
          <ResponsiveTypography marginLeft={3.7}>HTML • CSS</ResponsiveTypography>
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
          <ResponsiveTypography marginLeft={3.7}>HTML • CSS • JavaScript</ResponsiveTypography>
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
          <ResponsiveTypography marginLeft={3.7} sx={{}}>
            HTML • JavaScript • React • Redux Toolkit • React Router • Node.js •
            MongoDB • zod • axios • express • MUI
          </ResponsiveTypography>
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
          <ResponsiveTypography marginLeft={3.7} sx={{}}>
            HTML • JavaScript • React • body-parser • chance • sass • css
          </ResponsiveTypography>
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
          <ResponsiveTypography marginLeft={3.7} sx={{}}>
            JavaScript • React • Redux • redux-persist • redux-thunk • zod •
            chance • json-server • axios • bcryptjs • MUI
          </ResponsiveTypography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "1vw" }}>
          <ListAltIcon
            sx={{
              fontSize: 30,
              paddingBottom: 2,
              color: customStyles.colors.blue,
            }}
          />
          <ResponsiveTypography variant="h5" fontWeight={"bold"} paddingBottom={2}>
            Skills:
          </ResponsiveTypography>
        </Box>
        <Box
          sx={{
            display: "grid",
            width: "70%",
            gridTemplateColumns: "1fr 1fr",
            gridColumnGap: "4vw",
            gridRowGap: "0.5vw",
            paddingBottom: 9,
          }}
        >
          <Box sx={{ display: "flex", gap: "1.5vw" }}>
            <ResponsiveTypography sx={{ fontSize: 20 }}>JavaScript</ResponsiveTypography>
          </Box>
          <Box sx={{ display: "flex", gap: "1.5vw" }}>
            <ResponsiveTypography sx={{ fontSize: 20 }}>html, css, scss</ResponsiveTypography>
          </Box>
          <Box sx={{ display: "flex", gap: "1.5vw" }}>
            <ResponsiveTypography sx={{ fontSize: 20 }}>React</ResponsiveTypography>
          </Box>
          <Box sx={{ display: "flex", gap: "1.5vw" }}>
            <ResponsiveTypography sx={{ fontSize: 20 }}>Redux Toolkit</ResponsiveTypography>
          </Box>
          <Box sx={{ display: "flex", gap: "1.5vw" }}>
            <ResponsiveTypography sx={{ fontSize: 20 }}>Python</ResponsiveTypography>
          </Box>
          <Box sx={{ display: "flex", gap: "1.5vw" }}>
            <ResponsiveTypography sx={{ fontSize: 20 }}>Django Framework</ResponsiveTypography>
          </Box>
          <Box sx={{ display: "flex", gap: "1.5vw" }}>
            <ResponsiveTypography sx={{ fontSize: 20 }}>MySQL</ResponsiveTypography>
          </Box>
          <Box sx={{ display: "flex", gap: "1.5vw" }}>
            <ResponsiveTypography sx={{ fontSize: 20 }}>MongoDB</ResponsiveTypography>
          </Box>
          <Box sx={{ display: "flex", gap: "1.5vw" }}>
            <ResponsiveTypography sx={{ fontSize: 20 }}>cpython</ResponsiveTypography>
          </Box>
          <Box sx={{ display: "flex", gap: "1.5vw" }}>
            <ResponsiveTypography sx={{ fontSize: 20 }}>C++</ResponsiveTypography>
          </Box>
        </Box>
        <Box sx={{ width: "60vw" }}>
          <ResponsiveTypography fontWeight={"bold"}>Good afternoon!</ResponsiveTypography>
          <ResponsiveTypography>
            {" "}
            I started learning Python and studied it for 2 years. During this
            time, he was engaged in the development of small standard algorithms
            and wrote several parsers. Then I studied C++ for 2 years, mainly
            studied flexible memory work, wrote small algorithms and solved
            problems from LeetCode.
          </ResponsiveTypography>
          <ResponsiveTypography maxWidth={"60vw"}>
            I continued studying C++ at the university. Then I switched to
            JavaScript + React and have been doing web development for the last
            year.
          </ResponsiveTypography>
          <ResponsiveTypography>
            I try to improve my hard and soft skills. For example, I regularly
            write new pet projects by assembling a team or on my own. In the
            future, I'm going to study new technologies such as Golang,
            PostgreSQL, Firebase
          </ResponsiveTypography>
        </Box>
      </Box>
      <Box>
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "0.5vw" }}>
            <LocationOnIcon />
            <ResponsiveTypography fontWeight={"bold"}>Minsk, Belarus</ResponsiveTypography>
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
          <ResponsiveTypography variant="h5" fontWeight={"bold"} paddingBottom={2}>
            Education:
          </ResponsiveTypography>
          <ResponsiveTypography fontWeight={"bold"}>Mobile - developer</ResponsiveTypography>
          <ResponsiveTypography sx={{}}>
            Belarusian State University, faculty of Mechanics and Mathematics •
            2022 - 2026
          </ResponsiveTypography>
        </Box>
        <Box sx={{ paddingBottom: 6 }}>
          <ResponsiveTypography variant="h5" fontWeight={"bold"} paddingBottom={2}>
            Languages:
          </ResponsiveTypography>
          <ResponsiveTypography>English B1</ResponsiveTypography>
          <ResponsiveTypography>Russian</ResponsiveTypography>
        </Box>
        <Box
          sx={{
            paddingBottom: 6,
            display: "flex",
            flexDirection: "column",
            gap: "1vw",
          }}
        >
          <ResponsiveTypography variant="h5" fontWeight={"bold"} paddingBottom={2}>
            Social Networks:
          </ResponsiveTypography>
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
