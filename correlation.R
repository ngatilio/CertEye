library(ggplot2)
library(reshape2)
library(forcats)
df<-read.csv(".../datasets/graphs/graph1111.csv")
head(df)
data2_melted<-melt(df)
head(data2_melted, 5)
annotation <- data.frame(
   x = c(2.5,10.5, 19.5, 21.5, 25.1, 30.8, 33.7),
   y = c(34.3,34.3,34.3, 34.6, 34.3,34.3,34.3),
   label = c("North America", "Europe", "Oceania", " ", "Asia", "South America", "Africa")
)

p <- ggplot(data2_melted, aes(x=variable, y = Principles, color="black"))
p + theme_classic() + geom_point(aes(size=value),shape=21, color="black", fill="darkgray", stroke=1.06)+
  scale_x_discrete(labels = c("Canada","US","", "UK", "Spain", "Switzerland", "Sweden", "Belgium", "Amsterdam", "Germany", "Finland", "France", "Netherlands", "Norway", "Russia", "Ireland", "Italy", "","Australia", "New Zealand", "", "China", "Singapore", "UAE", "Israel", "India", "Hong Kong", "South Korea", "Japan","", "Colombia","Chile","", "South Africa"))+
  scale_size_area(max_size=9)+
  geom_vline(xintercept = 3, linetype="dashed", 
                color = "red", size=1.5) + 
  geom_text(data=annotation, aes(x=x, y=y, label=label), color="black", size=3, fontface="bold")+
  theme(
    axis.text.x = element_text(color="black",angle = 90,vjust = 0.5, hjust=1), 
    axis.ticks = element_line(color = "black"),
  )+
  theme(
    axis.text.y = element_text(color="black", angle=30),
    axis.ticks = element_line(color = "black")
  )+ labs(x="Country", y="Principles")
