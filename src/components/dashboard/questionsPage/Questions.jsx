// import React from "react"
// import { MdModeEdit, MdOutlineAdd } from "react-icons/md"
// import { Checkbox, Radio } from '@chakra-ui/react'

// import Flex from "../../layouts/Flex"
// import QuestionsJson from "../../../assets/json/questions.json"
// import { Box, Text, TitleH4 } from "../../../styles/ReusableTagsStyled"

// const Questions = (props) => {
//   return (
//     <Flex
//       flexDirection="column"
//       background= "#f8f8fa"
//       width= "100%"
//       height= "100%"
//     >
//       <Box width="60%" height="500px">
//         {QuestionsJson.map((element, index) => {
//           return <Flex
//             alignItems="center"
//             background= "white"
//             borderRadius= "3px"
//             boxShadow="rgb(0, 0, 0, 30%) 0px 2px 8px 0px"
//             height="70px"
//             justifyContent="space-between"
//             margin="5px auto"
//             padding="10px 20px"
//             key= {index}
//             width= "90%"
//           >
//             <Flex
//               justifyContent= "center"
//               width="10%"
//             >
//               <Checkbox
//                 iconColor="#4fa9af"
//                 colorScheme="#4fa9a"
//                 onChange={(e) => console.log("checkbox => ", e.target.value) }
//                 value={element.id}
//               />
//             </Flex>
//             <Box width="40%">
//               <TitleH4
//                 color="black"
//                 fontSize=".7em"
//                 fontWeight="600"
//               >Description</TitleH4>
//               <Text
//                 color="black"
//                 fontSize=".6em"
//                 overflow="hidden"
//                 textOverflow="ellipsis"
//                 whiteSpace="nowrap"
//                 margin="4px 0"
//               >{element.description}</Text>
//             </Box>
//             <Box
//               textAlign="center"
//               width="20%"
//             >
//               <TitleH4
//                 color="black"
//                 fontSize=".7em"
//                 fontWeight="600"
//               >Thème</TitleH4>
//               <Text
//                 color="black"
//                 fontSize=".6em"
//                 margin="4px 0"
//               >{element.topic}</Text>
//             </Box>
//             <Box
//               textAlign="center"
//               width="20%"
//             >
//               <TitleH4
//                 color="black"
//                 fontSize=".7em"
//                 fontWeight="600"
//               >Activer</TitleH4>
//               <Text
//                 color="black"
//                 fontSize=".6em"
//                 margin="4px 0"
//               >{element.active ? "Oui" : "Non"}</Text>
//             </Box>
//             <Flex
//               justifyContent= "center"
//               width="10%"
//             >
//               <MdModeEdit fontSize="1.3em" color="#4fa9af"/>
//             </Flex>
//           </Flex>
//         })}
//       </Box>
//       <Box width="40%"></Box>
//     </Flex>
//   )
// }

// export default Questions

import React from "react";
import { CardContainer } from "../../../styles/dashboard/questionsPage/QuestionItemCardStyled";
import { MainContainer } from "../../../styles/dashboard/questionsPage/QuestionsStyled";
import Aside from "../layouts/Aside";
import Header from "../layouts/Header";
import QuestionItemCard from "./components/QuestionItemCard";

const Questions = () => {
  return (
    <MainContainer>
      <Header
        title="Questions"
        description="Consultez la liste de vos questions"
      />
      <CardContainer>
        <QuestionItemCard />
      </CardContainer>
      <Aside />
    </MainContainer>
  );
};

export default Questions;
