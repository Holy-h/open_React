import React, { useState } from "react";

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentContent: allTabs[currentIndex],
    changeContent: setCurrentIndex
  };
};

const App = () => {
  const [contents, setContents] = useState([
    {
      title: "HTML",
      desc: "HTML is for Information"
    },
    {
      title: "CSS",
      desc: "CSS is for Design"
    },
    {
      title: "JS",
      desc: "JS is for interactive"
    },
    {
      title: "React",
      desc: "React is..."
    }
  ]);

  const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    const onChange = event => {
      const {
        target: { value }
      } = event;
      let willUpdate = true;
      if (willUpdate) {
        setValue(value);
      }
    };
    // input tag의 attribute와 동일한 이름으로 두어서 {...contentTitle}을 가능하게 함
    return { value, onChange };
  };

  const useForm = (currentContents, changeContent) => {
    console.log("currentContents:", currentContents);
    console.log("changeContent:", changeContent);
  };

  const { currentContent, changeContent } = useTabs(0, contents);

  const contentTitle = useInput(currentContent.title);
  const contentDesc = useInput(currentContent.desc);

  // console.log(contentTitle);
  // console.log({ ...contentTitle });

  return (
    <>
      {contents.map((content, index) => (
        <button key={index} onClick={() => changeContent(index)}>
          {content.title}
        </button>
      ))}
      <div>{currentContent.desc}</div>
      <form
        onSubmit={event => {
          event.preventDefault();
          console.log("submit");
        }}
      >
        <div>
          <input
            placeholder="ContentTitle"
            name="title"
            {...contentTitle}
            // value={contentTitle.value}
            // onChange={contentTitle.onChange}
          />
        </div>
        <div>
          <textarea
            placeholder="ContentDesc"
            name="desc"
            {...contentDesc}
            // value={contentTitle.value}
            // onChange={contentTitle.onChange}
          />
        </div>
        <input type="submit" />
      </form>
    </>
  );
};

export default App;
