import React from "react";
import styled from "styled-components";
import ToolTip from "./Hooks/ToolTip";
import { List, ListItem } from "./Styles/ListItem";
import CodeButton from "./CodeButton";
import CodeEditor from "./CodeEditor";

const ContentWrapper = styled.div`
  padding: 0px;
  margin: 0px;
  color: #fff;
`;

const Main = styled.main`
  padding: 0 10px;
`;
const SectionContainer = styled.section`
  height: 600px;
  padding: 0 20px;
`;

const Section = styled.div`
  margin-bottom: 40px;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  max-width: 1200px;

  > nav {
    display: flex;
    justify-content: left;
  }
`;

const Display = styled.div`
  width: 75%;
  padding-left: 40px;
  box-sizing: border-box;
  margin-right: auto;
`;

const Description = styled.div`
  margin-bottom: 30px;
`;

const sectionHeaders = [
  "Strings",
  "Functions",
  "Variables",
  "Numbers",
  "Operators",
  "Summary"
];

const description = [
  {
    title: "String",
    desc:
      "Start learning Vedas with us by typing in your first name surrounded by quotation marks, and ending with a semicolon. For example, you could type a name like this:",
    code: `"albert;"`
  },
  {
    title: "Functions",
    desc:
      "Start learning Vedas with us by typing in your first name surrounded by quotation marks, and ending with a semicolon. For example, you could type a name like this:",
    code: `print("albert");`
  },
  {
    title: "Variables",
    desc:
      "Start learning Vedas with us by typing in your first name surrounded by quotation marks, and ending with a semicolon. For example, you could type a name like this:",
    code: `name = "albert";`
  },
  {
    title: "Numbers",
    desc:
      "Start learning Vedas with us by typing in your first name surrounded by quotation marks, and ending with a semicolon. For example, you could type a name like this:",
    code: `a = 50`
  },
  {
    title: "Operators",
    desc:
      "Start learning Vedas with us by typing in your first name surrounded by quotation marks, and ending with a semicolon. For example, you could type a name like this:",
    code: `a = 10 + 20`
  },
  {
    title: "Summary",
    desc:
      "Start learning Vedas with us by typing in your first name surrounded by quotation marks, and ending with a semicolon. For example, you could type a name like this:",
    code: null
  }
];

export default function Content(props) {
  const [sections, setSections] = React.useState(
    sectionHeaders.map((item, index) => ({
      title: item,
      state: index === 0 ? 0 : -1
    }))
  );
  const [activeTab, setActiveTab] = React.useState(0);
  const handleSectionStateChange = index => {
    const updateSection = sections.map((item, i) =>
      i < index
        ? { ...item, state: 1 }
        : i === index
        ? { ...item, state: 0 }
        : { ...item, state: -1 }
    );
    setSections(updateSection);
    setActiveTab(index);
  };
  return (
    <ContentWrapper>
      <Main>
        <SectionContainer>
          <Section>
            <nav>
              <List>
                {[
                  sections.map((item, index) => (
                    <ListItem
                      key={item.title}
                      first={index === 0}
                      state={item.state}
                    >
                      <ToolTip
                        text={item.title}
                        onClick={() => handleSectionStateChange(index)}
                      >
                        <p />
                      </ToolTip>
                    </ListItem>
                  ))
                ]}
              </List>
            </nav>
            <Display>
              <Description>
                <h2> {`${activeTab + 1}. ${description[activeTab].title}`} </h2>
                <p> {description[activeTab].desc} </p>
              </Description>
              {description[activeTab].code && (
                <CodeButton code={description[activeTab].code} />
              )}
              <div style={{ marginTop: "50px" }}>
                <CodeEditor code={`Press "enter" to submit commands`} />
              </div>
            </Display>
          </Section>
        </SectionContainer>
      </Main>
    </ContentWrapper>
  );
}
