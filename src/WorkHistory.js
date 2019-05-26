
const WorkHistory = () => {
  const data = [
    {
      title: "Programmer",
      company: "Facilit",
      description: "Create and maintain Liferay portlets, implement new features in Liferay core.",
      techStack: ["Java", "Liferay", "Portlets", "AngularJS", "React Native", "GraphQL"],
      fromDate: '03/2014',
      toDate: null
    },
    {
      title: "Programmer",
      company: "Qualihouse",
      description: "Implement Java EE solutions for home automation",
      techStack: ["Java", "JSF", "JPA", "Raspberry PI", "JavaScript", "jQuery"],
      fromDate: '01/2013',
      toDate: '02/2014'
    },
    {
      title: "Programmer Intern",
      company: "IFPE",
      description: "Implement solutions using PHP and MySQL",
      techStack: ["PHP", "MySQL", "SQL", "Javascript", "jQuery", "HTML", "CSS"],
      fromDate: '03/2010',
      toDate: '12/2012'
    }
  ];
  return data.map((job, index) => {
    const isLastItem = (index === data.length - 1);
    return (
      <md-list-item className="md-2-line" key={index}>
        <Job 
          title={job.title}
          company={job.company}
          description={job.description}
          techStack={job.techStack}
          fromDate={job.fromDate}
          toDate={job.toDate}
        />
        {!isLastItem && <md-divider />}
      </md-list-item>
    );
  });
};
