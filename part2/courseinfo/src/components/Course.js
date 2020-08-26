import React from "react";

const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

const Total = ({ course }) => {
  const sum = course.parts
    .map((part) => part.exercises)
    .reduce((acc, current) => {
      return acc + current;
    });
  return (
    <p>
      <strong>Number of exercises {sum}</strong>
    </p>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default Course;
