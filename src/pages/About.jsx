import Header from "../components/Header";

export default function About() {
    return (
        <>
            <Header />

            <div className="py-8 px-4 max-w-6xl mx-auto text-white">
                <h1 className="text-4xl font-bold text-center mb-6 font-bold">About The Alley SMP</h1>

                <div className="bg-purple-900/20 rounded-lg p-6 space-y-6">
                    <section>
                        <h2 className="text-2xl font-semibold text-pink-300 mb-4">What is The Alley SMP?</h2>
                        <p className="text-lg leading-relaxed">
                            The Alley SMP is a semi-vanilla+ survival RPG server shaped by lore. Face chaos, forge your path, and reclaim The Alley in this immersive Minecraft experience.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-pink-300 mb-4">Our Story</h2>
                        <p className="text-lg leading-relaxed">
                            Founded with a passion for storytelling and community, The Alley SMP offers a unique blend of survival gameplay and role-playing elements. Join us to build, explore, and create unforgettable adventures.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-pink-300 mb-4">Server Details</h2>
                        <ul className="list-disc list-inside space-y-2 text-lg">
                            <li><strong>IP:</strong> thealleysmp.com</li>
                            <li><strong>Bedrock:</strong> thealleysmp.com:19132</li>
                            <li><strong>Version:</strong> Latest Minecraft Java & Bedrock</li>
                            <li><strong>Max Players:</strong> 500</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-pink-300 mb-4">Join the Community</h2>
                        <p className="text-lg leading-relaxed mb-4">
                            Connect with fellow players on our Discord server. Share your builds, discuss lore, and stay updated on server events.
                        </p>
                        <a href="https://discord.gg/HFDYvY4xP2" className="inline-block bg-pink-400 text-purple-900 hover:bg-pink-500 transition px-6 py-3 rounded-lg font-bold shadow-lg">
                            Join Discord
                        </a>
                    </section>
                </div>
            </div>
        </>
    )
}