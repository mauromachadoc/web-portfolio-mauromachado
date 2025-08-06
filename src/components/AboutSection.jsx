import { BarChart3, Brain, Code, Database, Layers } from "lucide-react"

export const AboutSection = () => { 
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Data Science passionate, Software Developer & Computer Engineering Student
                        </h3>

                        <p className="text-muted-foreground">
                            I am a 3rd-year Computer Engineering student with hands-on experience in software development, having worked with 
                            technologies such as TensorFlow, Python, MySQL, MongoDB, R, React, and Node.js across personal, academic, and 
                            research projects. My previous studies in Physical-Mathematical Engineering strengthened my expertise in advanced 
                            mathematics and scientific computing.
                        </p>

                        <p className="text-muted-foreground">
                            Currently, I am focusing on expanding my skills in machine learning, artificial intelligence, and data visualization 
                            through self-driven projects and continuous learning, aiming to design intelligent solutions that connect data with 
                            real-world impact.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button"> 
                                Get In Touch 
                            </a>

                            <a href="/CV-Mauro-Machado.pdf" download="CV-Mauro-Machado.pdf" target="_blank" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/1 transition-colors duration-300"> 
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Brain className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold">Machine Learning Solutions</h4>
                                    <p className="text-muted-foreground">
                                        Designing and implementing predictive models that turn raw data into actionable insights for real-world applications.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <BarChart3 className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold">Data Storytelling</h4>
                                    <p className="text-muted-foreground">
                                        Crafting clear and compelling narratives from complex datasets to support decision-making and strategy.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Layers className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold">End-to-End Development</h4>
                                    <p className="text-muted-foreground">
                                        Delivering complete solutions from data processing to user-facing applications that make complex systems easy to use.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}