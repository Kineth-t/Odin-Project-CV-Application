function Project({ onRemove, showRemove}) {
    return (
        <>
            <div className="projectForm">
                <textarea placeholder="AutoTagger: AI-based Image Tagging Tool Sept 2022 – Dec 2022
Developed a Python-based tool that used a pre-trained image recognition model (ResNet) to automatically tag product images for e-commerce platforms.
Built a front-end interface using React and integrated Flask APIs for backend processing.
Achieved 89% tag accuracy on a validation set of 2,000 images; reduced manual tagging time by 70% in simulated workflows.
Deployed app via Heroku and integrated basic user authentication and role management." style={{width:"100%",height:"140px"}}>
                </textarea>
                {showRemove && <button onClick={onRemove}>Remove</button>}
            </div>
        </>
    )
}

export default Project;