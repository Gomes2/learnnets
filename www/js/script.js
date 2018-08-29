jQuery(document).ready(function(){
	
	/*
	 * check status
	 */
	
	jQuery.ajax({
		url: 'status.php',
		timeout: 15000,
		cache: false,
		error: function() {
			showOfflineMessage();
		},
		success: function(data){
			if(jQuery.trim(data) == 'offline') {
				showOfflineMessage();
			}
		}
	});
	
	
	/*
	 * fullscreen feature
	 */
	
	jQuery("#bw_jq_webssh_fullscreen").click(function(){
		if(!jQuery("div#bw_websshwrapper").hasClass("bw_websshwrapper_fullscreen")) {
			jQuery("div#bw_websshwrapper").addClass("bw_websshwrapper_fullscreen");
			
			jQuery(this).text("exit fullscreen");
			jQuery(this).attr("title", "minimize webssh console");
			
			height = jQuery(window).height() - jQuery("p#bw_websshaction").outerHeight() - (jQuery("#bw_websshframe").outerHeight() - jQuery("#bw_websshframe").height());
			jQuery("#bw_websshframe iframe").height(height);
			
			height = jQuery("#bw_websshframe").innerHeight();
			jQuery(".bw_websshwrapper_fullscreen #bw_offlinemessage_overlay").height(height);
		} else{
			jQuery("div#bw_websshwrapper").removeClass("bw_websshwrapper_fullscreen");
			
			jQuery(this).text("fullscreen");
			jQuery(this).attr("title", "maximize webssh console");
			
			jQuery("#bw_websshframe iframe").removeAttr("style");
			jQuery("#bw_websshframe #bw_offlinemessage_overlay").removeAttr("style");
		}
	});
	
	jQuery(window).resize(function(){
		height = jQuery(window).height() - jQuery("p#bw_websshaction").outerHeight() - (jQuery("#bw_websshframe").outerHeight() - jQuery("#bw_websshframe").height());
		jQuery(".bw_websshwrapper_fullscreen iframe").height(height);
		
		height = jQuery("#bw_websshframe").innerHeight();
		jQuery(".bw_websshwrapper_fullscreen #bw_offlinemessage_overlay").height(height);
	});
});


/*
 * offline message
 */

function showOfflineMessage(){
	html = '<div id="bw_offlinemessage"><div id="bw_offlinemessage_overlay"></div><div id="bw_offlinemessage_wrapper">';
	html += '<h2>maintenance work <a href="javascript:closeOfflineMessage();">[X] close message</a></h2>';
	html += '<p class="bw_offlinemessage_error">The webssh service is actually down for maintenance. Please try again later.</p>';
	html += '<p><em>Please note:</em><br/>The webssh service is down every night between 03:15 a.m. and 05:15 a.m. (UTC+01:00) for regular maintenance.</p>';
	html += '</div></div>';
	
	jQuery("#bw_websshframe").append(html);
}

function closeOfflineMessage(){
	jQuery("#bw_offlinemessage").remove();
}