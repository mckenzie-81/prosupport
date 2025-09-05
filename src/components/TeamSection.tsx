
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const teamMembers = [
  { name: "John Doe", role: "CEO & Founder", avatar: "/avatars/01.png" },
  { name: "Jane Smith", role: "Chief Operating Officer", avatar: "/avatars/02.png" },
  { name: "Samuel Green", role: "Head of Operations", avatar: "/avatars/03.png" },
];

const TeamSection = () => {
  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Meet the Leadership</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            The passionate and experienced team dedicated to driving your success.
          </p>
           <div className="mt-6 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-md">
            <p className="font-bold">Next Update</p>
            <p>Full team bios and more members coming soon!</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <Avatar className="w-32 h-32 mx-auto mb-4">
                <AvatarImage src={member.avatar} alt={member.name} />
                <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
