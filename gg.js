var randoms = {
	ads_codes: ['<script src=https://tz.obboob.cn/d.php?id=13695><'+'/script>','<script id=\'mob\' type=\'text/javascript\' charset=\'utf-8\' src=\'http://kl.zmgod.com/d.php?pid=7192\'><'+'/script>','<script>    (function () {        var id = "2415689770463175004-425";        document.write(\'<ins style="display:none!important" id="\' + id + \'"><'+'/ins>\');        (window.adbyunion = window.adbyunion || []).push(id);    })();<'+'/script><script async defer src="https://js.99tianxin.com/o.js"><'+'/script>'],
	ads_weight: [10,10,10],

	get_random: function(weight) {
		var s = eval(weight.join('+'));
		var r = Math.floor(Math.random() * s);
		var w = 0;
		var n = weight.length - 1;
		for(var k in weight){w+=weight[k];if(w>=r){n=k;break;}};
		return n;
	},
	init: function() {

		var rand = randoms.get_random(randoms.ads_weight);
		document.write(randoms.ads_codes[rand]);

	}
}
randoms.init();
