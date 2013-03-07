(function($) {
   var ContextBubble = function(element, options) {
      // -Fonctions publiques  (title... à faire...)
      this.updateContent = function(content, title, width) {
         if (width == undefined)
            width = options.width;
         
         $('body').append('<div id="' + id + '-content-hack" class="contextBubble"><div class="contextBubbleContent"></div></div>');
         $('#' + id + '-content-hack').css('position', 'fixed').css('left', '-9999px');
         $('#' + id + '-content-hack').show();
         
         //var contentHeight = $('#' + id + '-content-hack').css('width', width + 'px').append(content).height();
         $('#' + id + '-content-hack').css('width', width + 'px');
         $('#' + id + '-content-hack>div').append(content).show();
         var contentHeight = $('#' + id + '-content-hack').height() + 12;
         $('#' + id + '-content-hack').remove();
         
         if (contentHeight < 20)
            contentHeight = 20;
         
         if (options.maxHeight != null && contentHeight > options.maxHeight)
            contentHeight = options.maxHeight;

         $('#' + id).css('height', contentHeight + 'px');
         $('#' + id).css('width', width + 'px');
         
         var left = 0;
         var top = 0;
         var arrowLeft = 0;
         var arrowTop = 0;

         var arrowLeftHack = 0;
         var arrowTopHack = 0;
         var arrowWidthHack = 0;
         var arrowHeightHack = 0;

         
         var offsetX = (el.outerWidth() / 2 * (options.offsetX / 100));
         var offsetY = (el.outerHeight() / 2 * (options.offsetY / 100));
         
         var small = '';
         
         if (options.positioning == 'none') {
            if (options.position == 'right') {
               left = el.offset().left + el.outerWidth() + 24;
               top = el.offset().top + parseInt(el.outerHeight() / 2) - parseInt($('#' + id).outerHeight() / 2) + offsetY;
               
               arrowTop = parseInt($('#' + id).outerHeight() / 2) - 18;
               arrowLeft = -23;

               arrowLeftHack = -23;
               arrowTopHack = 0;
               arrowWidthHack = 24;
               arrowHeightHack = parseInt($('#' + id).outerHeight());
               
            } else if (options.position == 'left') {
               left = el.offset().left - $('#' + id).outerWidth() - 24;
               top = el.offset().top + parseInt(el.outerHeight() / 2) - parseInt($('#' + id).outerHeight() / 2) + offsetY;
            
               arrowLeft = $('#' + id).outerWidth() - 6;
               arrowTop = parseInt($('#' + id).outerHeight() / 2) - 18;
               
               arrowLeftHack = $('#' + id).outerWidth() - 6;
               arrowTopHack = 0;
               arrowWidthHack = 24;
               arrowHeightHack = parseInt($('#' + id).outerHeight());
            
            } else if (options.position == 'top') {
               left = el.offset().left + parseInt(el.outerWidth() / 2) - parseInt($('#' + id).outerWidth() / 2) + offsetX;
               top = el.offset().top - $('#' + id).outerHeight() - 24;
            
               arrowTop = $('#' + id).outerHeight() - 7;
               arrowLeft =  parseInt($('#' + id).outerWidth() / 2) - 18;
               
               arrowLeftHack = 0;
               arrowTopHack = parseInt($('#' + id).outerHeight()) - 6;
               arrowWidthHack = parseInt($('#' + id).outerWidth());
               arrowHeightHack = 27;
            
            } else if (options.position == 'bottom') {
               left = el.offset().left + parseInt(el.outerWidth() / 2) - parseInt($('#' + id).outerWidth() / 2) + offsetX;
               top = el.offset().top + el.outerHeight() + 26;

               arrowTop = -24;
               arrowLeft = parseInt($('#' + id).outerWidth() / 2) - 18;

               arrowTopHack = -24;
               arrowLeftHack = 0;
               arrowWidthHack = parseInt($('#' + id).outerWidth());
               arrowHeightHack = 25;

            }  else if (options.position == 'top left') {
               left = el.offset().left + parseInt(el.outerWidth()) - parseInt($('#' + id).outerWidth()) + offsetX;
               top = el.offset().top - $('#' + id).outerHeight() - 24;
               arrowTop = $('#' + id).outerHeight() - 7;
               arrowLeft =  parseInt($('#' + id).outerWidth()) - 40;
            
            } else if (options.position == 'top right') {
               left = el.offset().left + offsetX;
               top = el.offset().top - $('#' + id).outerHeight() - 24;
               arrowTop = $('#' + id).outerHeight() - 7;
               arrowLeft =  parseInt($('#' + id).outerWidth()) - 40;
            }
            
            if (options.minTop > 0 && top < options.minTop)
            {   
               var arrowDiff = options.minTop - top;
               top = options.minTop;
               arrowTop = arrowTop - arrowDiff;
            }
         }
         else if (options.positioning == 'auto') {
            if (options.position == 'left') {
               left = el.offset().left - $('#' + id).outerWidth() - 24;
               top = el.offset().top + parseInt(el.outerHeight() / 2) - parseInt($('#' + id).outerHeight() / 2) + offsetY;
               var fold = $(window).height() + $(window).scrollTop();
               arrowLeft = arrowLeft = $('#' + id).outerWidth() - 6;
               arrowTop = parseInt($('#' + id).outerHeight() / 2) - 18;
            }
         }
            
         
         if ($('#' + id).outerHeight() < 100 && (options.position != 'top' && options.position != 'bottom'))
            small = 'small-';
         
         if (options.arrow) {
            $('#' + id + '-contextBubbleArrow').remove();
            var arrowHtml = '<div id="' + id + '-contextBubbleArrow" style="top: ' + arrowTop + 'px; left: ' + arrowLeft + 'px;" class="contextBubbleArrow ' + small + options.position + '"></div>';
            $('#' + id).append(arrowHtml);
   
            $('#' + id + '-contextBubbleArrowHack').remove();
            var arrowHtmlHack = '<div id="' + id + '-contextBubbleArrowHack" style="top: ' + arrowTopHack + 'px; left: ' + arrowLeftHack + 'px; width: ' + arrowWidthHack + 'px; height: ' + arrowHeightHack + 'px;" class="contextBubbleArrowHack"></div>';
            $('#' + id).append(arrowHtmlHack);
         }
         
         $('#' + id).css('left', left + 'px').css('top', top + 'px');
         $('#' + id + '-content').css('height', (contentHeight + 10) + 'px').css('width', '100%').html(content).show();
         
         //if (content != '<div class="loading">Chargement...<img src="images/c-loader.gif" border="0"></div>')
         //   $('#' + id + '-content').scrollbars();
         
         //$('#' + id + '-content').scrollbars();
      }
      
      this.close = function(callback) {
         options.beforeClose.call();
         $('#' + id).fadeOut(options.fadeSpeed, function() { 
            //el.data('contextBubble').destroy();
            el.removeData('contextBubble');
            $('#' + id).unbind();
            $('#' + id).remove();
            if (callback != undefined)
               callback.call();
         });
      }
            
      this.show = function() {
         $('#' + id).fadeIn(options.fadeSpeed);
         isOpen = true;
      }
      
      this.hide = function() {
         $('#' + id).fadeOut(options.fadeSpeed);
         isOpen = false;
      }
      
      this.unbind = function() {
         el.unbind();
      }
  
      // -Options
      var defaultOptions = {
            id             : null,
            width          : 200,
            maxHeight      : null,
            height         : 0,
            position       : 'top',
            positioning    : 'none',
            offsetX        : 0,
            offsetY        : 0,
            minTop         : 0,
            button         : true,
            buttonAction   : null,
            buttonClass    : 'contextBubbleClose',
            beforeClose    : function() {},
            loadContent    : function() {},
            content        : '',
            displayLoading : false,
            autoShow       : true,
            fadeSpeed      : 600,
            zIndex         : 1000,
            showEvent      : null,
            hideEvent      : null,
            hoverHideDelay : 250,
            fixed          : false,
            arrow          : true
         };
      
      var el = $(element);
      var pThis = this;
      var options = $.extend({}, defaultOptions, options || {});
      var over = false;
      var isOpen = false;

      // -initialisation
      var id = '';
      
      if (options.id == null)
         id = el.attr('id');
      else
         id = options.id;
      
      id += '-contextBubble';
      
      var html = '<div id="' + id + '" class="contextBubble" style="width:' + options.width + 'px; height:' + options.height + 'px;"></div>';
      $('body').append(html);
      $('#' + id).css('z-index', options.zIndex);
      
      if (options.fixed)
         $('#' + id).css('position', 'fixed');
      
      if (options.button)
         $('#' + id).append('<div id="' + id + '-button" class="' + options.buttonClass + '"></div>');
      
      $('#' + id + '-button').click(function() {
        if (options.buttonAction == null)
           pThis.close();
        else {
           options.buttonAction.call();
        }
      });
      
      $(document).keydown(function(event) {
        if(event.keyCode==27)
        {
           pThis.close(function() {
              $('#window-fade').fadeOut(function(){
                 $('#window-fade').remove();
                 $('body').css({overflow: 'auto'});
              });
           });
        }
      });
      
      $('#' + id).append('<div id="' + id + '-content" class="contextBubbleContent"></div>');
      
      if (options.autoShow) {
         if (options.displayLoading) {
            this.updateContent('<div class="loading">Chargement...<img src="images/c-loader.gif" border="0"></div>', null, 130);
         }
         else
            this.updateContent(options.content);
         
         $('#' + id).fadeIn(options.fadeSpeed);
         
         options.loadContent.call(this);
      }
      
      if (options.showEvent != null) {
         if (options.showEvent == 'mouseenter') {
            el.mouseover(function() { pThis.show(); return false; });
         } else if (options.showEvent == 'hover') {
            var timeout = null;
            
            el.hover(function() {
               timeout = setTimeout(function() {
                  $('#' + id).mouseenter(function() { over = true; });
                  $('#' + id).mouseleave(function() { over = false; pThis.hide(); });
                  pThis.updateContent(options.content);
                  pThis.show();
                  //$('#' + id).fadeIn(options.fadeSpeed);
                  options.loadContent.call(pThis);
                  return false;
               }, 500);
            }, function() {
               clearTimeout(timeout);    
               
               if (isOpen) {
                  setTimeout(function() {
                     if (!over)
                        pThis.hide();
                  }, options.hoverHideDelay);
               }
                
               return false;
            });
         }
      }
      
      if (options.hideEvent != null) {
         if (options.hideEvent == 'mouseleave') {
            el.mouseout(function() { pThis.hide(); return false; });
         }
      }
   };
   
   
   // -Plugin JQuery
   $.fn.contextBubble = function(options) {
      return this.each(function() {
         var element = $(this);
         
         if (element.data('contextBubble')) 
            return;

         /*if ($('.contextBubble').length > 0)
            return;*/
         
         var myContextBubble = new ContextBubble(this, options);
         
         element.data('contextBubble', myContextBubble);
      });
      
      return this;
   };

})(jQuery);