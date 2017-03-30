var a=0,b=2,c=0,d=0;
function timer()
{
	if(a==0&&b==0&&c==0&&d==0)
	{
		window.alert("time is up");	
	}
	else{
		
		if(d==0&&c!=0)
			{
				d=10;
				c=c-1;
			}
		if(c==0&&d==0)
			{
				c=5;
				d=9;
				b=b-1;
			}
		else
			{
				d=d-1;
			}

		}
	if(c==0)
		{
			document.getElementById("timer").innerHTML="0"+b+":"+"0"+d;
		}
	else
		{
			document.getElementById("timer").innerHTML="0"+b+":"+(10*c+d);
		}	
	setTimeout(timer,1000);
}
