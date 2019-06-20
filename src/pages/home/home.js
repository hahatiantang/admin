/**
 * 文件说明：
 * 详细描述
 * 创建者：ycl
 * 创建时间： 2019/5/5
 * 变更记录：
 */
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data() {
    return {

    }
  },
  components: {
    HelloWorld
  },
  /**
   *在实例初始化之后
   */
  beforeCreate() {
    console.log(111111)
  },
  /**
   *在实例创建完成后被立即调用
   */
  created() {
    this.$post('/aaa',{a:1}).then(res =>{

    },err =>{
    })
  },
  /**
   *mounted 挂载结束状态
   */
  mounted() {
    console.log(3333)
  },
  computed: {},
  methods: {}
}