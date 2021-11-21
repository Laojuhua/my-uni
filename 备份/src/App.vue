<script>
export default {
	onLaunch: function () {
		const updateManage = uni.getUpdateManager();
		updateManage.onCheckForUpdate((res) => {
			if (res.hasUpdate) {
				uni.showLoading({
					title: "更新下载中…",
					mask: true,
				});
			}
		});

		updateManage.onUpdateReady(() => {
			uni.hideLoading();
			uni.showModal({
				title: "更新提示",
				content: "新版本已准备好，是否重启应用",
				showCancel: true,
				success: ({ confirm, cancel }) => {
					if (confirm) {
						updateManage.applyUpdate();
					}
				},
			});
		});

		updateManage.onUpdateFailed(() => {
			uni.hideLoading();
			uni.showToast({
				title: "更新下载失败",
				icon: "none",
			});
		});
	},
	onShow: function () {
		console.log(process.env.NODE_ENV, "process.env.NODE_ENV");
		console.log("App Show");
	},
	onHide: function () {
		console.log("App Hide");
	},
};
</script>

<style>
/*每个页面公共css */
</style>
