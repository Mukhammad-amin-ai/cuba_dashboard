<template>
  <div id="sidebar-menu">
    <ul class="sidebar-links custom-scrollbar" id="myDIV"
      :style="[layoutobject.split(' ').includes('horizontal-wrapper') ? layout.settings.layout_type == 'rtl' ? { '  -right': margin + 'px' } : { 'margin-left': margin + 'px' } : { margin: '0px' }]">
      <li class="back-btn">
        <router-link to="/">
          <img class="img-fluid" src="../../assets/images/logo/logo-icon.png" alt="" /></router-link>
        <div class="mobile-back text-end">
          <span>Back</span><i class="fa fa-angle-right ps-2" aria-hidden="true"></i>
        </div>
      </li>
      <li class="sidebar-main-title">
        <div>
          <h6 class="lan-1">General</h6>
        </div>
      </li>
      <li class="sidebar-list" v-if="permission[0].name === 'statistics' && permission[0].value > 0">
        <label class="badge badge-light-primary"></label>
        <router-link class="sidebar-link sidebar-title" to="/">
          <svg class="stroke-icon">
            <use href="@/assets/svg/icon-sprite.svg#stroke-home"></use>
          </svg>
          <svg class="fill-icon">
            <use href="@/assets/svg/icon-sprite.svg#fill-home"></use>
          </svg>
          <span class="lan-3">Dashboard</span>
        </router-link>
      </li>
      <li class="sidebar-list" v-if="permission[1].name === 'my-groups' && permission[1].value === true">
        <label class="badge badge-light-primary"></label>
        <router-link class="sidebar-link sidebar-title hover" to="/my-groups">
          <i class="icofont icofont-users-alt-5"></i>
          <span class="lan-3"> My Groups</span>
        </router-link>
      </li>
      <li class="sidebar-list" v-if="permission[2].name === 'my-children' && permission[2].value === true">
        <label class="badge badge-light-primary"></label>
        <router-link class="sidebar-link sidebar-title hover" to="/my-children">
          <i class="icofont icofont-kids-scooter"></i>
          <span class="lan-3"> My Children</span>
        </router-link>
      </li>
      <li class="sidebar-list" v-if="permission[3].name === 'my-courses' && permission[3].value === true">
        <label class="badge badge-light-primary"></label>
        <router-link class="sidebar-link sidebar-title hover" to="/my-courses">
          <i class="icofont icofont-architecture-alt"></i>
          <span class="lan-3">My Courses</span>
        </router-link>
      </li>
      <li class="sidebar-list" v-if="permission[4].name === 'my-cards' && permission[4].value === true">
        <label class="badge badge-light-primary"></label>
        <router-link class="sidebar-link sidebar-title hover" to="/payme">
          <i class="icofont icofont-bill-alt"></i>
          <span class="lan-3"> My Cards</span>
        </router-link>
      </li>
      <li class="sidebar-list" v-if="permission[5].name === 'all-courses' && permission[5].value === true">
        <label class="badge badge-light-primary"></label>
        <router-link class="sidebar-link sidebar-title hover" to="/all-courses">
          <i class="icofont icofont-architecture-alt"></i>
          <span class="lan-3">All Courses</span>
        </router-link>
      </li>
      <li class="sidebar-list" v-if="permission[6].name === 'roles' && permission[6].value > 0">
        <label class="badge badge-light-primary"></label>
        <router-link class="sidebar-link sidebar-title hover" to='/add-role'>
          <i class="icofont icofont-business-man "></i>
          <span class="lan-3"> Role</span>
        </router-link>
      </li>
      <li class="sidebar-list" v-if="permission[7].name === 'users' && permission[7].value > 0">
        <label class="badge badge-light-primary"></label>
        <router-link class="sidebar-link sidebar-title hover" to='/user'>
          <i class="icofont icofont-business-man "></i>
          <span class="lan-3"> Users</span>
        </router-link>
      </li>
      <li class="sidebar-list" v-if="permission[8].name === 'inactive_users' && permission[8].value > 0">
        <label class="badge badge-light-primary"></label>
        <router-link class="sidebar-link sidebar-title hover" to="/inactive-user">
          <i class="icofont icofont-teacher"></i>
          <span class="lan-3"> inactive users</span>
        </router-link>
      </li>
      <li class="sidebar-list" v-if="permission[9].name === 'teachers' && permission[9].value > 0">
        <label class="badge badge-light-primary"></label>
        <router-link class="sidebar-link sidebar-title hover" to="/teachers">
          <i class="icofont icofont-teacher"></i>
          <span class="lan-3"> Teachers</span>
        </router-link>
      </li>
      <li class="sidebar-list" v-if="permission[10].name === 'assistant_teachers' && permission[10].value > 0">
        <label class="badge badge-light-primary"></label>
        <router-link class="sidebar-link sidebar-title hover" to="/assistant-teacher">
          <i class="icofont icofont-teacher"></i>
          <span class="lan-3"> assistant teachers</span>
        </router-link>
      </li>
      <li class="sidebar-list" v-if="permission[11].name === 'courses' && permission[11].value > 0">
        <label class="badge badge-light-primary"></label>
        <router-link class="sidebar-link sidebar-title hover" to="/courses">
          <i class="icofont icofont-architecture-alt"></i>
          <span class="lan-3"> Courses</span>
        </router-link>
      </li>
      <!-- <li class="sidebar-list" v-if="permission[12].name === 'lessons' && permission[12].value > 0">
        <label class="badge badge-light-primary"></label>
        <router-link class="sidebar-link sidebar-title hover" to="/courses">
          <i class="icofont icofont-architecture-alt"></i>
          <span class="lan-3"> Lessons</span>
        </router-link>
      </li> -->
      <li class="sidebar-list" v-if="permission[13].name === 'groups' && permission[13].value > 0">
        <label class="badge badge-light-primary"></label>
        <router-link class="sidebar-link sidebar-title hover" to="/group">
          <i class="icofont icofont-group-students"></i>
          <span class="lan-3"> Group</span>
        </router-link>
      </li>
      <li class="sidebar-list" v-if="permission[14].name === 'students' && permission[14].value > 0">
        <label class="badge badge-light-primary"></label>
        <router-link class="sidebar-link sidebar-title hover" to="/student">
          <i class="icofont icofont-student-alt"></i>
          <span class="lan-3"> Students</span>
        </router-link>
      </li>
      <li class="sidebar-list" v-if="permission[15].name === 'parents' && permission[15].value > 0">
        <label class="badge badge-light-primary"></label>
        <router-link class="sidebar-link sidebar-title hover" to="/student">
          <i class="icofont icofont-student-alt"></i>
          <span class="lan-3"> Parents</span>
        </router-link>
      </li>
      <!-- <li class="sidebar-list" v-if="permission[16].name === 'sessions' && permission[17].value > 0">
        <label class="badge badge-light-primary"></label>
        <router-link class="sidebar-link sidebar-title hover" to='/branches'>
          <i class="icofont   icofont-building-alt"></i>
          <span class="lan-3"> Session</span>
        </router-link>
      </li> -->
      <li class="sidebar-list" v-if="permission[17].name === 'branches' && permission[17].value > 0">
        <label class="badge badge-light-primary"></label>
        <router-link class="sidebar-link sidebar-title hover" to='/branches'>
          <i class="icofont   icofont-building-alt"></i>
          <span class="lan-3"> Branches</span>
        </router-link>
      </li>
      <!-- <li class="sidebar-list" v-if="permission[18].name === 'rooms' && permission[18].value > 0">
        <label class="badge badge-light-primary"></label>
        <router-link class="sidebar-link sidebar-title hover" to='/branches'>
          <i class="icofont   icofont-building-alt"></i>
          <span class="lan-3"> rooms</span>
        </router-link>
      </li> -->
      <li class="sidebar-list" v-if="permission[19].name === 'schedules' && permission[19].value > 0">
        <label class="badge badge-light-primary"></label>
        <router-link class="sidebar-link sidebar-title hover" to="/schedule">
          <i class="icofont icofont-ui-calendar"></i>
          <span class="lan-3"> Schedule</span>
        </router-link>
      </li>
      <li class="sidebar-list" v-if="permission[20].name === 'cashiers' && permission[20].value > 0">
        <label class="badge badge-light-primary"></label>
        <router-link class="sidebar-link sidebar-title hover" to="/payme">
          <i class="icofont icofont-bill-alt"></i>
          <span class="lan-3">Cashiers</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import { layoutClasses } from '../../constants/layout';
let permObj = JSON.parse(localStorage.getItem("permissions"));
let roleName = JSON.parse(localStorage.getItem("name"))
// console.log(permObj[17].name === 'schedules' && permObj[17].value > 0);
// console.log(permObj);

export default {
  name: 'Navmenu',
  data() {
    return {
      layoutobj: {},
      dashboardShow: false,
      permission: permObj,
      nameP: roleName
    };
  },
  computed: {
    ...mapState({
      menuItems: state => state.menu.data,
      layout: state => state.layout.layout,
      sidebar: state => state.layout.sidebarType,
      activeoverlay: (state) => state.menu.activeoverlay,
      togglesidebar: (state) => state.menu.togglesidebar,
      width: (state) => state.menu.width,
      height: (state) => state.menu.height,
      // margin: (state) => state.menu.margin,
      menuWidth: (state) => state.menu.menuWidth,
    }),
    layoutobject: {
      get: function () {
        return JSON.parse(JSON.stringify(layoutClasses.find((item) => Object.keys(item).pop() === this.layout.settings.layout)))[this.layout.settings.layout];
      },
      set: function () {
        this.layoutobj = layoutClasses.find((item) => Object.keys(item).pop() === this.layout.settings.layout);
        this.layoutobj = JSON.parse(JSON.stringify(this.layoutobj))[this.layout.settings.layout];
        return this.layoutobj;
      }
    }
  },
  watch: {
    width() {
      window.addEventListener('resize', this.handleResize);
      this.handleResize();
      window.addEventListener('scroll', this.handleScroll);
      this.handleScroll();
      if (window.innerWidth < 992) {
        const newlayout = JSON.parse(JSON.stringify(this.layoutobject).replace('horizontal-wrapper', 'compact-wrapper'));
        document.querySelector('.page-wrapper').className = 'page-wrapper ' + newlayout;
        this.$store.state.menu.margin = 0;
      } else {
        document.querySelector('.page-wrapper').className = 'page-wrapper ' + this.layoutobject;
      }

      if ((window.innerWidth < 1199 && this.layout.settings.layout === 'Tokyo') || (window.innerWidth < 1199 && this.layout.settings.layout === 'Moscow') || (window.innerWidth < 1199 && this.layout.settings.layout === 'Rome')) {
        this.menuItems.filter(menuItem => {
          menuItem.active = false;
        });
      }
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
    if (this.$store.state.menu.width < 991) {
      this.layout.settings.layout = 'Dubai';
      this.margin = 0;
    }
    setTimeout(() => {
      const elmnt = document.getElementById('myDIV');
      this.$store.state.menu.menuWidth = elmnt.offsetWidth;
      this.$store.state.menu.menuWidth > window.innerWidth ?
        (this.$store.state.menu.hideRightArrow = false, this.$store.state.menu.hideLeftArrowRTL = false) :
        (this.$store.state.menu.hideRightArrow = false, this.$store.state.menu.hideLeftArrowRTL = true);
    }, 500);
    this.layoutobject = layoutClasses.find((item) => Object.keys(item).pop() === this.layout.settings.layout);
    this.layoutobject = JSON.parse(JSON.stringify(this.layoutobject))[this.layout.settings.layout];
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  mounted() {
    this.menuItems.filter(items => {
      if (items.path === this.$route.path)
        this.$store.dispatch('menu/setActiveRoute', items);
      if (!items.children) return false;
      items.children.filter(subItems => {
        if (subItems.path === this.$route.path)
          this.$store.dispatch('menu/setActiveRoute', subItems);
        if (!subItems.children) return false;
        subItems.children.filter(subSubItems => {
          if (subSubItems.path === this.$route.path)
            this.$store.dispatch('menu/setActiveRoute', subSubItems);
        });
      });
    });
    // this.dashboard()

  },
  methods: {
    handleScroll() {
      if (window.scrollY > 400) {
        if (this.layoutobject.split(' ').pop() === 'material-type' || this.layoutobject.split(' ').pop() === 'advance-layout')
          document.querySelector('.sidebar-main').className = 'sidebar-main hovered';
      } else {
        if (document.getElementById('sidebar-main'))
          document.querySelector('.sidebar-main').className = 'sidebar-main';
      }
    },
    setNavActive(item) {
      this.$store.dispatch('menu/setNavActive', item);
      if (this.layoutobject.split(' ').includes('compact-sidebar') && window.innerWidth > 991) {
        if (this.menuItems.some(menuItem => menuItem.active === true)) {
          this.$store.state.menu.activeoverlay = true;
        } else {
          this.$store.state.menu.activeoverlay = false;
        }
      }
    },
    hidesecondmenu() {
      if (window.innerWidth < 991) {
        this.$store.state.menu.activeoverlay = false,
          this.$store.state.menu.togglesidebar = false;
        this.menuItems.filter(menuItem => {
          menuItem.active = false;
        });
      } else if (this.layoutobject.split(' ').includes('compact-sidebar')) {
        this.$store.state.menu.activeoverlay = false,
          this.menuItems.filter(menuItem => {
            menuItem.active = false;
          });
      }
    },
    handleResize() {
      this.$store.state.menu.width = window.innerWidth - 450;
    },

  }
};
</script>
<style scoped>
.courses {
  width: 8%;
}

.hover:hover {
  color: #7366ff !important;
}
</style>