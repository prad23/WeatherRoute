import unittest, sys
sys.path.append("../modules")
from location import Location

class LocationTest(unittest.TestCase):

    def testCheckCity(self):
        loc = Location()
        loc.getlocation()
        self.assertEqual("Fremont", loc.get_cityname())


if __name__ == '__main__':
    unittest.main()
