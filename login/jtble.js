
<script type="text/javascript">
    $(document).ready(function(){
        $(".add-row").click(function(){
			var slno = $("#slno").val();
		     var firstname = $("#firstname").val();
            var lastname = $("#lastname").val();
            var email = $("#email").val();
			var pno = $("#pno").val();
			console.log(slno && firstname &&email);
			if(slno && firstname && lastname && email && pno)
			{
            var markup = "<tr><td>" + slno + "</td><td>" + firstname + "</td><td>" + lastname + "</td><td>" + email + "</td><td>" + pno +  "</td></tr>";
            $("table tbody").append(markup);
			}
			else
			{
			alert("fill all the value");
			}
        });
        
        // Find and remove selected table rows
        $(".delete-row").click(function(){
            $("table tbody").find('input[name="record"]').each(function(){
            	if($(this).is(":checked")){
                    $(this).parents("tr").remove();
                }
            });
        });
    });  
</script>
