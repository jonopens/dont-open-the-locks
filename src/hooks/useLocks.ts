import { useState } from 'react';

const useLocks = () => {
  const [checkedOnce, setCheckedOnce] = useState<boolean>(false);
  const [checkedTwice, setCheckedTwice] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("I wouldn't touch those...");

  const noChecksDone = !checkedOnce && !checkedTwice;
  const noSecondCheck = checkedOnce && !checkedTwice;
  const allChecks = checkedOnce && checkedTwice;

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
  
    if (allChecks) {
      setTitle('Boo.');
    }
  };

  return {
    checkedOnce,
    checkedTwice,
    handleDialog,
    title,
  };
};

export default useLocks;
