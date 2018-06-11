import unittest, sys
sys.path.append("../modules")
from location import Location

class LocationTest(unittest.TestCase):

    def test_checkCity(self):
        loc = Location ()
        loc.getlocation ()
        self.assertEqual("Newark", loc.get_cityname())

    def test_checkState(self):
        loc = Location ()
        loc.getlocation ()
        self.assertEqual("California", loc.get_statename())

if __name__ == '__main__':
    unittest.main()
