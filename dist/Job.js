
var Job = function Job(_ref) {
  var title = _ref.title,
      company = _ref.company,
      description = _ref.description,
      fromDate = _ref.fromDate,
      toDate = _ref.toDate,
      techStack = _ref.techStack;
  return React.createElement(
    'div',
    { className: 'md-list-item-text' },
    React.createElement(
      'h3',
      null,
      title,
      ' at ',
      company,
      ' (',
      fromDate,
      ' - ',
      toDate || 'Present',
      ')'
    ),
    React.createElement(
      'p',
      null,
      description
    ),
    React.createElement(
      'p',
      null,
      techStack.join(', ')
    )
  );
};