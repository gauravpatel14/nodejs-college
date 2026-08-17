const avg = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;

function codingScoreCheck(marks, cutoff) {
  return new Promise((res, rej) =>
    setTimeout(
      () =>
        avg(marks) >= cutoff
          ? res(avg(marks))
          : rej("Sorry, you have not cleared the Coding Assessment."),
      2000,
    ),
  );
}

function technicalInterviewCheck(marks, cutoff) {
  return new Promise((res, rej) =>
    setTimeout(
      () =>
        avg(marks) >= cutoff
          ? res(avg(marks))
          : rej("Sorry, you have not cleared the Technical Interview."),
      2000,
    ),
  );
}

function finalSelectionCheck(cAvg, tAvg, cutoff) {
  return new Promise((res, rej) =>
    setTimeout(
      () =>
        (cAvg + tAvg) / 2 >= cutoff
          ? res((cAvg + tAvg) / 2)
          : rej("Sorry, you have not cleared the final selection cutoff."),
      2000,
    ),
  );
}

codingScoreCheck([85, 90, 78, 92], 75)
  .then(
    (cAvg) => (
      console.log("Coding Score:", cAvg),
      technicalInterviewCheck([80, 85, 88], 70).then((tAvg) => ({ cAvg, tAvg }))
    ),
  )
  .then(
    ({ cAvg, tAvg }) => (
      console.log("Technical Score:", tAvg),
      finalSelectionCheck(cAvg, tAvg, 80)
    ),
  )
  .then((fAvg) => console.log("Final Selection Score:", fAvg))
  .catch((err) => console.log(err));
