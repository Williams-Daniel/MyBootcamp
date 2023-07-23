import styled from "styled-components"

export interface iFooter{
title?:string,
content1?:string
content2?:string
content3?:string
content4?:string
content5?:string
content6?:string
content7?:string
}

const GFooter:React.FC<iFooter> = ({
  title,
  content1,
  content2,
  content3,
  content4,
  content5,
  content6,
  content7,
})=>{
    return(
        <div>
<Container>
    <Title>{title}</Title>
    <ContentHolder>
        <Content>{content1}</Content>
        <Content>{content2}</Content>
        <Content>{content3}</Content>
        <Content>{content4}</Content>
        <Content>{content5}</Content>
        <Content>{content6}</Content>
        <Content>{content7}</Content>

    </ContentHolder>
</Container>
        </div>
    )
}

export default GFooter

const Container = styled.div`
  min-height: 20px;
  width: 250px;
  margin-top: 30px;
`
const Title = styled.div`
 font-size: 14px;
  font-weight: 500;
  margin-bottom: 25px;
  color: white;
  `
const ContentHolder = styled.div`

`
const Content = styled.div`
  font-size: 13px;
  font-weight: 400;
  margin: 15px 0;
  color: white;
`
