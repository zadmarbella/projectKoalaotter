angular.module('projectMomoTestPage')
.directive('getHeadingTitle', function(){
    return {
        restrict : "A",
        link : function(scope,element,attributes)
        {
            var originalValue = "";
            element.bind("mouseover", function()
            {
                scope.title = attributes.message;
                scope.$apply();
            });
            element.bind("mouseout", function()
            {

            });
        }

    }
});