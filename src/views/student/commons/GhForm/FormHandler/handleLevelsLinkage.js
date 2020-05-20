export function linkageName(value, columns, list) {
  list.forEach(item => {
    if (item.prop == "name") {
      if (value == "男") {
        item.hide = false;
      } else {
        item.hide = true;
      }
    }
  });
}

export function linkageGrade(value, columns, list) {
  list.forEach(item => {
    if (item.prop == "grade") {
      item.hide = false;
      if (value == "计算机") {
        item.input.options = [
          {
            label: '1-1班',
            value: '1-1班'
          },
          {
            label: '1-2班',
            value: '1-2班'
          },
        ]
      } else {
        item.input.options = [
          {
            label: '2-1班',
            value: '2-1班'
          },
          {
            label: '2-2班',
            value: '2-2班'
          },
        ]
      }
    }
  });
}
