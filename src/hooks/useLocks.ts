import { useState } from 'react';

const useLocks = () => {
  const [checkedOnce, setCheckedOnce] = useState<boolean>(false);
  const [checkedTwice, setCheckedTwice] = useState<boolean>(false);
  const [checkedThrice, setCheckedThrice] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("I wouldn't touch those...");
  const [transition, setTransition] = useState<string>('');

  const noChecksDone = !checkedOnce && !checkedTwice && !checkedThrice;
  const noSecondCheck = checkedOnce && !checkedTwice && !checkedThrice;
  const noThirdCheck = checkedOnce && checkedTwice && !checkedThrice;
  const allChecks = checkedOnce && checkedTwice && checkedThrice;

  const handleDialog = () => {
    if (noChecksDone) {
      const responseOne = window.confirm("Are you sure?");
      setCheckedOnce(responseOne);
      setTitle('That was... ill-advised. I urge you to close this window.');
    }
  
    if (noSecondCheck) {
      const responseTwo = window.confirm(
        "Are you really, really sure? Like really?",
      );
      setCheckedTwice(responseTwo);
      setTitle('Please. Stop. This is getting out of hand.');
    }

    if (noThirdCheck) {
      const responseThree = window.confirm(
        "You've lost your mind. Stop now.",
      );
      setCheckedThrice(responseThree);
      setTitle('This will not end well...');
    }
  
    if (allChecks) {
      setTitle('Boo.');
      setTransition(' fade-to-black');
    }
  };

  return {
    checkedOnce,
    checkedTwice,
    checkedThrice,
    handleDialog,
    title,
    transition,
  };
};

export default useLocks;
