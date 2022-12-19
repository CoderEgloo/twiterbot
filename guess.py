import requests
from bs4 import BeautifulSoup
loginurl = ('https://ca-egusd-psv.edupoint.com/PXP2_Login_Student.aspx?regenerateSessionId=True')
secureurl = ('https://ca-egusd-psv.edupoint.com/Home_PXP2.aspx')
gradeurl = ('https://ca-egusd-psv.edupoint.com/PXP2_Gradebook.aspx?AGU=0&studentGU=11965F8A-676B-4615-9A90-E4EE38CB7405')


payload = {
    'ctl00$MainContent$username': '99742450',
    'ctl00$MainContent$password': 'R245016qw',
    'ctl00$MainContent$Submit1': 'Login',
    '__VIEWSTATE': 'T//haE8dQVYkg1f08za6W8ga46lAZtT1mFmMM8bOdd9Otl5n2I9TZVrfmT8yqpfMGQhdgF5MOK/A6DwZkDcswj1EL8Py3Ee5FP7CizimDyg=T//haE8dQVYkg1f08za6W8ga46lAZtT1mFmMM8bOdd9Otl5n2I9TZVrfmT8yqpfMGQhdgF5MOK/A6DwZkDcswj1EL8Py3Ee5FP7CizimDyg=',
    '__VIEWSTATEGENERATOR': 'E13CECB1',
    '__EVENTVALIDATION': 'pgE3jDNmRXWYTU9dzPWTELCwpu+P9hSn1LyA+YlndTkTIoDDSvv+1xiDmlwTo+eh0iT6oiHt1fHjXXp2DwZrvszSh+NLfVoPw0KIpf19ZNjyueUml0LAx5+zBCNhnAZIQMHUAK8cthwCff8PUUligzloLjQTTO0coM8/gI6qVNM='
}

with  requests.session() as s:
    s.post(loginurl, data=payload)
    r = s.get(secureurl)
    x = s.get(gradeurl)
    soup = BeautifulSoup(x.content, 'html.parser')
    print(soup.prettify())
    
