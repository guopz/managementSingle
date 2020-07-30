export let student = [
  {
    name: '姓名',
    prop: 'name',
    align: 'center',
    width: 120,
    hide: true,
    default: '1231',
    input: {
      type: "input",
      disable: false,
      readonly: false,
      placeholder: '请输入姓名',
      subtype: 'text'
    },
    rules: [
      { required: true, message: '请输入姓名', trigger: 'blur' }
    ]
  },
  {
    name: '性别',
    prop: 'sex',
    align: 'center',
    width: 80,
    input: {
      type: "select",
      placeholder: '请输入性别',
      options: [
        {
          label: '男',
          value: '男'
        },
        {
          label: '女',
          value: '女'
        }
      ],
      change: 'linkageName'
    },
    rules: [
      { required: true, message: '请输入性别', trigger: 'change' }
    ]
  },
  {
    name: '年龄',
    prop: 'age',
    align: 'center',
    width: 80,
    placeholder: '请输入年龄',
    input: {
      type: "input",
      disable: false,
      readonly: false,
      placeholder: '请输入年龄',
      subtype: 'text'
    },
    rules: [
      { required: true, message: '请输入年龄', trigger: 'blur' }
    ]
  },
  {
    name: '出生日期',
    prop: 'date',
    align: 'center',
    width: 120,
    input: {
      type: "input",
      disable: false,
      readonly: false,
      placeholder: '请输入出生年月',
      subtype: 'text'
    },
    rules: [
      { required: true, message: '请输入出生年月', trigger: 'blur' }
    ]
  },
  {
    name: '专业',
    prop: 'major',
    align: 'center',
    width: 120,
    input: {
      type: "select",
      placeholder: '请输入专业',
      options: [
        {
          label: '计算机',
          value: '计算机'
        },
        {
          label: '土木',
          value: '土木'
        }
      ],
      change: 'linkageGrade'
    },
    rules: [
      { required: true, message: '请输入专业', trigger: 'change' }
    ]
  },
  {
    name: '班级',
    prop: 'grade',
    align: 'center',
    width: 100,
    hide: true,
    input: {
      type: "select",
      placeholder: '请输入班级'
    },
    rules: [
      { required: true, message: '请输入班级', trigger: 'change' }
    ]
  },
  {
    name: '住址',
    prop: 'address',
    align: 'left',
    width: 250,
    input: {
      type: "input",
      disable: false,
      readonly: false,
      placeholder: '请输入地址',
      subtype: 'text'
    },
    rules: [
      { required: true, message: '请输入地址', trigger: 'blur' }
    ]
  },
  {
    name: '图片上传',
    prop: 'upload',
    align: 'left',
    width: 120,
    input: {
      type: "upload"
    },
    rules: [
      { required: true, message: '请选择图片', trigger: 'change' }
    ]
  }
]

export const rules = {};
// export const rules = {
//   name: [
//     { required: true, message: '请输入姓名', trigger: 'blur' }
//   ],
//   sex: [
//     { required: true, message: '请输入性别', trigger: 'change' }
//   ],
//   age: [
//     { required: true, message: '请输入年龄', trigger: 'blur' }
//   ],
//   grade: [
//     { required: true, message: '请输入班级', trigger: 'blur' }
//   ],
//   date: [
//     { required: true, message: '请输入出生日期', trigger: 'blur' }
//   ],
//   major: [
//     { required: true, message: '请填写专业', trigger: 'blur' }
//   ],
//   address: [
//     { required: true, message: '请输入地址', trigger: 'blur' }
//   ],
//   address: [
//     { required: true, message: '请输入地址', trigger: 'blur' }
//   ]
// }
