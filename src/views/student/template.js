export const student = [
  {
    name: '姓名',
    prop: 'name',
    align: 'center',
    width: 120,
    placeholder: '请输入姓名',
    default: '',
    rules: [
      { required: true, message: "请输入优惠券名称", trigger: "blur" }
    ]
  },
  {
    name: '性别',
    prop: 'sex',
    align: 'center',
    width: 80,
    placeholder: '请输入性别'
  },
  {
    name: '年龄',
    prop: 'age',
    align: 'center',
    width: 80,
    placeholder: '请输入年龄'
  },
  {
    name: '班级',
    prop: 'grade',
    align: 'center',
    width: 100,
    placeholder: '请输入班级'
  },
  {
    name: '出生日期',
    prop: 'date',
    align: 'center',
    width: 120,
    placeholder: '请输入出生年月'
  },
  {
    name: '专业',
    prop: 'major',
    align: 'center',
    width: 120,
    placeholder: '请输入专业'
  },
  {
    name: '住址',
    prop: 'address',
    align: 'left',
    width: 250,
    placeholder: '请输入地址'
  }
]

export const rules = {
  name: [
    { required: true, message: '请输入姓名', trigger: 'blur' }
  ],
  sex: [
    { required: true, message: '请输入性别', trigger: 'blur' }
  ],
  age: [
    { required: true, message: '请输入年龄', trigger: 'blur' }
  ],
  grade: [
    { required: true, message: '请输入班级', trigger: 'blur' }
  ],
  date: [
    { required: true, message: '请输入出生日期', trigger: 'blur' }
  ],
  major: [
    { required: true, message: '请填写专业', trigger: 'blur' }
  ],
  address: [
    { required: true, message: '请输入地址', trigger: 'blur' }
  ]
}
