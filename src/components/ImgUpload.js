import {Button,Upload} from 'antd'


export default function App(obj){
	return(
<div
style={{
	display:"flex",
	justifyContent:"center",
	alignItems:"center",
	width: "100%"
}}
>

	<Upload.Dragger
	multiple={false}
	listType="picture"
 action={"http://localhost:3000/"}
 showUploadList={{showRemoveIcon:true}}
 accept=".png,.jpeg,.doc"
 beforeUpload={(file)=>{
	// console.log({file});
	obj={...file};
	return false;
 }}
style={{
	width: "100%"
}}
 >
		Drag files here OR
		<br/>
		<Button>Click Upload</Button>
	</Upload.Dragger>
</div>

	)
}