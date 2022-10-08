import ResumeSubheader from "./ResumeSubHeader";

const ProfessionalExperienceContent = () => {
  return (
    <div>
      <div>
        <ResumeSubheader
          title="Web Developer Co-op "
          info="Invoke Co., Vancouver"
          date="Sep 2022 – Dec 2022"
        />
        <ul>
          <li>
            Developed, tested, and deployed new features for “Incrowd,” a
            live-streaming platform that leverages mobile cameras for streaming.
            The platform allows multiple synchronized perspectives of a live
            event and stores recordings for future playback.
          </li>
          <li>
            Enabled users to select an audio source from the perspectives
            available, independent of the video source.
          </li>
          <li>
            Wrote automation scripts for interacting with a DynamoDB database
            and creating new events.
          </li>
          <li>
            Refactored the existing code base to improve the architecture and
            code consistency.
          </li>
          <li>
            <em>
              TypeScript, React, React Native, GraphQL, AWS API Gateway,
              Appsync, DynamoDB and Lambda
            </em>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfessionalExperienceContent;
