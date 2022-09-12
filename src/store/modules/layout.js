export default {
	namespaced: true,
	mutations: {
		// 收缩/展开菜单侧边栏
		changeCollapse(state, payload) {
			state.logoTextShow = !state.logoTextShow;
			state.isCollapse = !state.isCollapse;
			if (state.isCollapse) {
				state.changeCollapseClass = 'el-icon-s-unfold';
				state.asideWidth = 64;
			} else {
				state.changeCollapseClass = 'el-icon-s-fold';
				state.asideWidth = 200;
			}
		},
	},
	state: {
		asideWidth: 200, // 侧边栏宽度
		isCollapse: false, // 侧边栏是否收缩
		changeCollapseClass: 'el-icon-s-fold', // 收缩icon
		logoTextShow: true, // logo文字是否显示, 当侧边栏收缩时不显示
	}
}