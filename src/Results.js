import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Result(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>
          {props.results.phonetic && (
            <div className="Phonetic">
              <span>/{props.results.phonetic}/</span>
            </div>
          )}
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
        <br />
      </div>
    );
  } else {
    return null;
  }
}
